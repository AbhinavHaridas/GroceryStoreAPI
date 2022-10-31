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

// Delete order of a customer
// URL = http://localhost:8000/orders/delete_customer_order?customer_id={Enter customer_id here}&order_id={Enter order_id here}
router.get("/delete_customer_order", (req, res) => {
  const customer_id = req.query.customer_id;
  const order_id = req.query.order_id;
  connection.query(
    "DELETE FROM orders WHERE customer_id = " +
      customer_id +
      " AND id = " +
      order_id +
      " AND order_status = -1",
    (err, results) => {
      if (err || results.affectedRows == 0) {
        res.json("Order not deleted");
      } else {
        res.json("Order deleted");
      }
    }
  );
});

// Insert order item of a customer
// URL = http://localhost:8000/orders/insert_customer_order_item?customer_id={Enter customer_id here}&order_id={Enter order_id here}&item_id={Enter item_id here}&quantity={Enter quantity here}
router.post("/add_confirmed_order", (req, res) => {
  const order_id = req.body.order_id;
  const item_id = req.body.item_id;
  const quantity = req.body.quantity;
  connection.query(
    "INSERT INTO `order_items`(`order_id`, `category_item_id`, `quantity`) VALUES (" +
      order_id +
      "," +
      item_id +
      "," +
      quantity +
      ")",

    (err, results) => {
      if (err) {
        res.json("Order not inserted");
      } else {
        res.json("Order inserted");
      }
    }
  );
});

module.exports = router;
