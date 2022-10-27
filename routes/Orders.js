const express = require("express");
const connection = require("../database");
const router = express.Router();

//Get All orders
// URL = http://localhost:8000/orders/
router.get("/", (req, res) => {
  connection.query("SELECT * FROM orders", (err, results) => {
    res.json(results);
  });
});

//Fetch order of a customer
// URL = http://localhost:8000/orders/fetch_customer_order?customer_id={Enter customer_id here}
router.get("/fetch_customer_order", (req, res) => {
  const customer_id = req.query.customer_id;
  connection.query(
    "SELECT `o`.`customer_id` AS `customer_id`,`o`.`order_date` AS `order_date`,`o`.`order_address` AS `address`,`o`.`payment_method` AS `payment_method`,`o`.`order_amount` AS `amount` FROM orders `o` WHERE `o`.`customer_id` =" +
      customer_id +
      " AND `o`.`order_status` = 0",
    (err, results) => {
      res.json(results);
    }
  );
});

router.get("/delete_customer_order", (req, res) => {
  const customer_id = req.query.customer_id;
  const order_id = req.query.order_id;
  connection.query(
    "DELETE FROM orders WHERE customer_id = " + customer_id+" AND id = "+order_id+" AND order_status = 0",
    (err, results) => {
      if (err || results.affectedRows == 0) {
        res.json("Order not deleted");
      } else {
        res.json("Order deleted");
      }
    }
  );
});

module.exports = router;
