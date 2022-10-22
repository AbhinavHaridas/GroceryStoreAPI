const PORT = 8000;
const express = require("express");
const connection = require("../database");
const router = express.Router();

//Get All inventories
router.get("/", (req, res) => {
  connection.query("SELECT * FROM inventories", (err, results) => {
    res.json(results);
  });
});

module.exports = router;
