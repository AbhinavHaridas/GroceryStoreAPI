const PORT = 8000
const express = require('express')

let app = express()

const mysql = require("mysql")

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

app.get('/', (req, res) => {
    connection.query("SELECT * FROM food",
    (err, results) => {
        if (err) console.log("Sorry not working")
        else res.json(results)
    })
})

app.get('/fruits', (req, res) => {
    res.json({"description" : "Here goes json 2"})
})

app.get('/vegetables', (req, res) => {
    res.json({"description" : "Here goes json 3"})
})

app.listen(PORT, () => console.log(`listening to requests on port ${PORT}`))