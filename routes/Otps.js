const express = require("express");
const connection = require("../database");
const router = express.Router();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

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
    client.messages
        .create({
            body: "Your OTP for grocery store is " + otp,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: `+91${contact}`,
        })
        .then((message) => {
            if (message.sid.error_message == null) {
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

module.exports = router;
