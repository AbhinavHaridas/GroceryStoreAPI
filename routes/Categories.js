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
  connection.query(
    "SELECT * FROM category_items `ci` WHERE `ci`.`category_id` = " + type_id,
    (err, results) => {
      res.json(results);
    }
  );
});

//Get few category items according to the category type and limit
//URL = http://localhost:8000/categories/get_few_category_items?type_id={Enter type_id here}&limit={Enter limit here}
router.get("/fetch_few_category_items", (req, res) => {
  const type_id = req.query.type_id;
  const limit = req.query.limit;
  connection.query(
    "SELECT * FROM category_items `ci` WHERE `ci`.`category_id` = " +
      type_id +
      " LIMIT " +
      limit,
    (err, results) => {
      res.json(results);
    }
  );
});

// Adds selected item of the customer to the cart
// http://localhost:8000/categories/insert_item_to_cart?customer_id={Enter customer_id}&item_id={Enter item_id here}
router.get("/insert_item_to_cart", (req, res) => {
  const customer_id = req.query.customer_id;
  const item_id = req.query.item_id;
  connection.query(
    "INSERT INTO carts (`customer_id`, `category_item_id`) VALUES (" +
      customer_id +
      ", " +
      item_id +
      ")",
    (err, results) => {
      // If there is an error, send the error otherwise send success message
      if (err || results.affectedRows == 0) {
        res.json("Item not added to cart");
      } else {
        res.json("Item added to cart");
      }
    }
  );
});

// Gets all the category items to be displayed in the search bar
// http://localhost:8000/categories/fetch_search_data
router.get("/fetch_search_data", (req, res) => {
  connection.query(
    "SELECT name,quantity FROM category_items",
    (err, results) => {
      res.json(results);
    }
  );
});

// Update the quantity of the item in the cart
// http://localhost:8000/categories/update_cart_quantity
router.post("/update_cart_quantity", (req, res) => {
  const customer_id = req.body.customer_id;
  const cart_items = req.body.cart_items;
  const err_check = true;

  cart_items.forEach((item) => {
    connection.query(
      "UPDATE carts SET quantity =" +
        item.quantity +
        " WHERE customer_id = " +
        customer_id +
        " AND category_item_id = " +
        item.id,
      (err, results) => {
        if (err || results.affectedRows == 0) {
          res.json("Quantity not updated");
          err_check = false;
        }
      }
    );
    if (err_check) {
      res.json("Quantity updated");
    }
  });
});

// Fetch items from the cart
// http://localhost:8000/categories/fetch_cart_items?customer_id={Enter customer_id here}
router.get("/fetch_cart_items", (req, res) => {
  const customer_id = req.query.customer_id;
  connection.query(
    "SELECT `ci`.`name` as `name`, `ci`.`price` as `price`,`ci`.`quantity` as `quantity`,`c`.`quantity` as `no_of_items`,`ci`.`image` as `image` FROM `carts` `c` INNER JOIN `category_items` `ci` ON `c`.`category_item_id` = `ci`.`id`  AND `c`.`customer_id` =" +
      customer_id,
    (err, results) => {
      res.json(results);
    }
  );
});

// Delete the item from the cart
// http://localhost:8000/categories/delete_cart_item
router.get("/delete_cart_item", (req, res) => {
  const customer_id = req.query.customer_id;
  const item_id = req.query.item_id;
  connection.query(
    "DELETE FROM carts WHERE customer_id = " +
      customer_id +
      " AND category_item_id = " +
      item_id +
      " AND quantity = 0",
    (err, results) => {
      if (err || results.affectedRows == 0) {
        res.json("Item not deleted");
      } else {
        res.json("Item deleted");
      }
    }
  );
});

module.exports = router;
