const express = require("express");
const connection = require("../database");
const router = express.Router();

//Get All offers
// URL = http://localhost:8000/offers/
router.get("/", (req, res) => {
  connection.query("SELECT * FROM offers", (err, results) => {
    res.json(results);
  });
});

module.exports = router;
