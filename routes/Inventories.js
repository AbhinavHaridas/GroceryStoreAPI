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

module.exports = router;
