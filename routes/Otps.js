const express = require("express");
const connection = require("../database");
const router = express.Router();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const { encryptWithAES } = require("../passwordProtection");

//Get All orders
// URL = http://localhost:8000/otps/
router.get("/", (req, res) => {
    connection.query("SELECT * FROM otps", (err, results) => {
        res.json(results);
    });
});

//API for generating a new OTP and sending it to the respective number using twilio API 

router.post("/generate_new_otp", (req, res) => {
    const contact = req.body.contact;
    const otp = Math.floor(100000 + Math.random() * 900000);
    //Twilio API to send the OTP to the respective number
    client.messages
        .create({
            body: "Your OTP for grocery store is " + otp,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: `+91${contact}`,
        })
        .then((message) => {
            // If there isnt any error in sending the otp to the number then insert the otp into the database
            if (message.sid.error_message == null) {
                //Query to insert the data into the database
                connection.query(
                    "INSERT INTO `otps`(`contact`, `otp`) VALUES (?,?)",
                    [contact, otp],
                    (err, results) => {
                        if (err || results.affectedRows == 0) {
                            res.json("OTP not inserted");
                        } else {
                            res.json("OTP inserted successfully");
                        }
                    }
                );
            } else {
                res.json("OTP not send successfully");
            }
        });
});

//API for validating the OTP
router.post("/validate_otp", (req, res) => {
    const contact = req.body.contact;
    const otp = req.body.otp;
    //Query to check if the otp is valid or not
    connection.query("UPDATE `otps` SET `status`= 1 WHERE `otp` = ? AND `contact` = ? AND `status` = 0", [otp, contact], (err, results) => {
        //If the otp is valid then update the status of the otp to 1
        if (err || results.affectedRows == 0) {
            res.json("OTP not validated");
        } else {
            res.json("OTP validated successfully");
        }
     }
    );
 });

//API for updating the password of the customer
router.post("/change_password", (req, res) => {
    const contact = req.body.contact;
    // Password is encrypted by AES before storing into database
    const password = encryptWithAES(req.body.password);
    //Query to update the password of the customer
    connection.query("UPDATE `customers` SET `password`= ? WHERE `contact` = ?", [password, contact], (err, results) => {
        if (err || results.affectedRows == 0) {
            res.json("Password not changed");
        }
        //If there is any error in updating the password then send the error message
        else {
            res.json("Password changed successfully");
        }
    });
});



module.exports = router;
