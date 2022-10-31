const express = require("express");
const connection = require("../database");
const router = express.Router();

//Get All inventories
// URL = http://localhost:8000/inventories/
router.get("/", (req, res) => {
  connection.query("SELECT * FROM inventories", (err, results) => {
    res.json(results);
  });
});

//Get Total Count of inventories
// URL = http://localhost:8000/inventories/get_total_inventory_count
router.get("/get_total_inventory_count", (req, res) => {
  connection.query(
    "SELECT SUM(stock_count) AS total_inventory_count FROM inventories",
    (err, results) => {
      res.json(results);
    }
  );
});

//Get no of items sold
// URL = http://localhost:8000/inventories/get_no_of_items_sold
router.get("/get_no_of_items_sold", (req, res) => {
  connection.query(
    "SELECT SUM(quantity) AS total_items_sold FROM order_items",
    (err, results) => {
      res.json(results);
    }
  );
});

//Get no of users
// URL = http://localhost:8000/inventories/get_no_of_users
router.get("/get_no_of_users", (req, res) => {
  connection.query(
    "SELECT COUNT(*) AS total_users FROM customers",
    (err, results) => {
      res.json(results);
    }
  );
});

//Get total revenue
// URL = http://localhost:8000/inventories/get_total_revenue
router.get("/get_total_revenue", (req, res) => {
  connection.query(
    "SELECT SUM(order_amount) AS total_revenue FROM orders WHERE order_status = 1",
    (err, results) => {
      if (results.total_revenue == null) {
        res.json("No orders made yet");
      }
      else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
