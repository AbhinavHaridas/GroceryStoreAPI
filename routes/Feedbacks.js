const express = require("express");
const connection = require("../database");
const router = express.Router();

//Get All feedbacks
// URL = http://localhost:8000/feedbacks/
router.get("/", (req, res) => {
  connection.query("SELECT * FROM feedbacks", (err, results) => {
    res.json(results);
  });
});


//API to insert a feedback by a customer
// URL = http://localhost:8000/feedbacks/insert_feedback
router.post("/insert_feedback", (req, res) => {
  //Get the data from the request body
  const customer_id = req.body.customer_id;
  const name = req.body.name;
  const contact = req.body.contact;
  const email = req.body.email;
  const reason = req.body.reason;
  const description = req.body.description;
 //Query to insert the data into the database
  connection.query("INSERT INTO feedbacks (customer_id, name, contact, email, reason, description) VALUES (?, ?, ?, ?, ?, ?)", [customer_id, name, contact, email, reason, description], (err, results) => {
    if (err || results.affectedRows == 0) {
      res.json("Feedback not inserted");
    } else {
      res.json("Feedback inserted successfully");
    }
  });
})




module.exports = router;
