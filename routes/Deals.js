const express = require("express");
const connection = require("../database");
const router = express.Router();

//Get All deal items
// URL = http://localhost:8000/deals/
router.get("/", (req, res) => {
  connection.query("SELECT * FROM deal_items", (err, results) => {
    res.json(results);
  });
});

//Get all deal types
// URL = http://localhost:8000/deals/get_deal_types
router.get("/get_deal_types", (req, res) => {
  connection.query("SELECT * FROM deal_types", (err, results) => {
    res.json(results);
  });
});



module.exports = router;
