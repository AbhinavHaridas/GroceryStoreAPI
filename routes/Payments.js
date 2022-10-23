const express = require("express");
const connection = require("../database");
const router = express.Router();

//Get All payments
// URL = http://localhost:8000/payments/
router.get("/", (req, res) => {
  connection.query("SELECT * FROM payment_details", (err, results) => {
    res.json(results);
  });
});

module.exports = router;
