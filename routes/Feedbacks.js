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

module.exports = router;
