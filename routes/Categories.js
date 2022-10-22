const PORT = 8000;
const express = require("express");
const connection = require("../database");
const router = express.Router();

//Get All Categories
router.get("/", (req, res) => {
  connection.query("SELECT * FROM Categories", (err, results) => {
    res.json(results);
  });
});



module.exports = router;
