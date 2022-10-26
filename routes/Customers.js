const express = require("express");
const connection = require("../database");
const router = express.Router();
const { encryptWithAES, decryptWithAES } = require("../passwordProtection");


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
    const customer_id = req.query.customer_id;
    connection.query("SELECT * FROM customers `c` WHERE `c`.`id` =" + customer_id,
        (err, results) => {
            res.json(results);
        });
});

//API to create a new account for a customer
// http://localhost:8000/customers/create_new_account
router.post("/create_new_account", (req, res) => {
    //Get the data from the request body
    const name = req.body.name;
    const contact = req.body.contact;
    const email = req.body.email;
    // Password is encrypted by AES before storing into database
    const password = encryptWithAES(req.body.password);
    const address = req.body.address;
    const location = req.body.location;

    connection.query("SELECT `c`.`name` FROM customers `c` WHERE `c`.contact = ?", [contact], (err, results) => {
        if (results.length > 0) {
            res.json("Customer already exists");
        }
        else {
            //Query to insert the data into the database
            connection.query("INSERT INTO customers (name, contact, email, address, password, location) VALUES (?, ?, ?, ?, ?, ?)", [name, contact, email, address, password, location], (err, results) => {
                if (err || results.affectedRows == 0) {
                    res.json("Customer not inserted");
                } else {
                    res.json("Customer inserted successfully");
                }
            });

        }
    });

});

// API to validate a customer's credentials

// http://localhost:8000/customers/signin
router.post("/signin", (req, res) => { 
    //Get the data from the request body
    const contact = req.body.contact;
    const password = req.body.password;
    // Fetching the password from the database of the respective user
    connection.query("SELECT `c`.`password` AS `password` FROM customers `c` WHERE `c`.`contact` = ?", [contact], (err, results) => {
        // If the user doesn't exist
        if (err || results.length == 0) {
            res.json("Account doesn't exist");
        }
        else {
            // If the user exists, then the password is decrypted and compared with the password entered by the user
            const passwordCheck = decryptWithAES(results[0].password);
            if(password === passwordCheck) {
                res.json("Login Successful");
            }
            else {
                res.json("Incorrect Password");
            }
        }
    });
});

module.exports = router;