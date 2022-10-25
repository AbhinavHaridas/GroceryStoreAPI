const express = require("express");
const connection = require("../database");
const router = express.Router();

//Get All Categories
// URL = http://localhost:8000/categories/
router.get("/fetch_category_types", (req, res) => {
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

//Get few category items according to the category type and limit
//URL = http://localhost:8000/categories/get_few_category_items?type_id={Enter type_id here}&limit={Enter limit here}
router.get("/fetch_few_category_items", (req, res) => {
  const type_id = req.query.type_id;
  const limit = req.query.limit;
  connection.query("SELECT * FROM category_items `ci` WHERE `ci`.`category_id` = " + type_id + " LIMIT " + limit, (err, results) => {
    res.json(results);
  })
});

// Adds selected item of the customer to the cart
// http://localhost:8000/categories/insert_item_to_cart?customer_id={Enter customer_id}&item_id={Enter item_id here}
router.get("/insert_item_to_cart", (req, res) => {
  const customer_id = req.query.customer_id;
  const item_id = req.query.item_id;
  connection.query("INSERT INTO carts (`customer_id`, `category_item_id`) VALUES (" + customer_id + ", " + item_id + ")", (err, results) => {
    // If there is an error, send the error otherwise send success message
    if (err || results.affectedRows == 0) {
      res.json("Item not added to cart");
    }
    else {
      res.json("Item added to cart");
    }
  })
})

module.exports = router;
