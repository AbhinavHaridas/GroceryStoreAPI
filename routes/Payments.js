const express = require("express");
const connection = require("../database");
const router = express.Router();
const stripe = require('stripe')('sk_test_51M0IGfSJ9iZKWHXhhksX83P8pSqHTz0oWKnI1rczzUrTXDx9OsES926WXODfpqEbmCHPjBHyBkIiib3LpBkrAwan0022fJsWpF');
const { encryptWithAES, decryptWithAES } = require("../passwordProtection");

//Get All payments
// URL = http://localhost:8000/payments/
router.get("/", (req, res) => {
  connection.query("SELECT * FROM payment_details", (err, results) => {
    res.json(results);
  });
});

// API to insert payment details of the customer entered in the checkout page
// http://localhost:8000/payments/insert_payment_details
router.post("/insert_payment_details", (req, res) => {
  //Get the data from the request body
  const customer_id = req.body.customer_id;
  const card_number = encryptWithAES(req.body.card_number);
  const card_holder_name = req.body.card_holder_name;
  const expiry_date = req.body.expiry_date;
  const cvv = encryptWithAES(req.body.cvv);
  //Query to insert the data into the database
  connection.query(
    "INSERT INTO `payment_details`(`customer_id`, `card_number`, `card_holder_name`, `card_expiry_date`, `cvv`) VALUES (?,?,?,?,?)",
    [customer_id, card_number, card_holder_name, expiry_date, cvv],
    (err, results) => {
      if (err || results.affectedRows == 0) {
        res.json("Error");
      } else {
        // We return a message and the payment id of the payment details inserted
        res.json({
          message: "Payment details inserted successfully",
          payment_id: results.insertId,
        });
      }
    }
  );
});

//API to update payment status when the payment is successful
router.get("/update_payment_status", (req, res) => {
  const payment_id = req.query.payment_id;
  connection.query(
    "UPDATE `payment_details` SET `status` = 1 WHERE `payment_details`.`id` = ?",
    [payment_id],
    (err, results) => {
      
      if (err || results.affectedRows == 0) {
        res.json(err);
      } else {
        res.json("Payment status updated successfully");
      }
    }
  );
})

router.post('/makepayment', (req, res) => {
  const amount = req.body.amount;
  const description = req.body.description;
  stripe.charges.create({
    amount: amount * 100, //Required
    currency: "inr", //Required
    source: "tok_amex", //optional id of a card
    description: description
  }, function(err, charge) {
    if(err){
    } else {
        res.status(200).send({message:"charge success", id: charge.id})
    }
});
})

module.exports = router;
