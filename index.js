const PORT = 8000
const express = require('express')
const mysql = require("mysql")

let app = express()

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "A valid password goes here",
    database: "database_name"
})

connection.connect((err) => {
    if (err) console.error(err)
    else console.log("Successfully Connected to the database")
})

app.get('/fruits', (req, res) => {
    connection.query("SELECT * FROM fruits",
    (err, results) => {
        res.json(results)
    })
})

app.get('/vegetables', (req, res) => {
    connection.query("SELECT * FROM vegetables",
    (err, results) => {
        res.json(results)
    })
})

app.get('/frozen-veg', (req, res) => {
    connection.query("SELECT * FROM frozen-veg",
    (err, results) => {
        res.json(results)
    })
})

app.get('/')

app.listen(PORT, () => console.log(`listening to requests on port ${PORT}`))