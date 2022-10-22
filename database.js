//JS File for database connection

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "grocery_store",
});

connection.connect((err) => {
  if (err) console.error(err);
  else console.log("Successfully Connected to the database");
});

//Export the connection
module.exports = connection;