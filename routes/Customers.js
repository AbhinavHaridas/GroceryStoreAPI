const express = require("express");
const connection = require("../database");
const router = express.Router();

//Get All Customers
// URL = http://localhost:8000/customers/
router.get('/', (req, res) => {
    connection.query("SELECT * FROM customers",
        (err, results) => {
            res.json(results);
    })
});

//Get Specific customers
// URL = http://localhost:8000/customers/get_specific_customer?customer_id={Enter customer_id here}
router.get('/get_specific_customer', (req, res) => {
    const id = req.query.id;
    connection.query("SELECT * FROM customers `c` WHERE `c`.`id` =" + id,
        (err, results) => { 
            res.json(results);
    })
});

module.exports = router;