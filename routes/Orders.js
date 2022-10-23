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

module.exports = router;
