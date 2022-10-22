const PORT = 8000;
const express = require("express");
const connection = require("../database");
const router = express.Router();

//Get All deals
router.get("/", (req, res) => {
  connection.query("SELECT * FROM deal_items", (err, results) => {
    res.json(results);
  });
});

//Get all deal types
router.get("/get_deal_types", (req, res) => {
  connection.query("SELECT * FROM deal_types", (err, results) => {
    res.json(results);
  });
});



module.exports = router;
