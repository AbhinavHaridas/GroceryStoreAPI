const express = require("express");
const connection = require("../database");
const router = express.Router();

//Get All Categories
// URL = http://localhost:8000/categories/
router.get("/", (req, res) => {
  connection.query("SELECT * FROM categories", (err, results) => {
    res.json(results);
  });
});

//Get All Category items
//URL = http://localhost:8000/categories/get_category_items
router.get("/get_category_items", (req, res) => {
  connection.query("SELECT * FROM category_items", (err, results) => {
    res.json(results);
  });
});

//Get Specific category items
//URL =  http://localhost:8000/categories/get_specific_category_items?type_id={Enter type_id here}
router.get("/get_specific_category_items", (req, res) => {
  const type_id = req.query.type_id;
  connection.query("SELECT * FROM category_items `ci` WHERE `ci`.`category_id` = "+type_id, (err, results) => {
    res.json(results);
  })
});


module.exports = router;
