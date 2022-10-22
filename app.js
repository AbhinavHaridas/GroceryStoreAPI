const express = require('express')
const app = express()
const fruits = require("./data/fruits.json")
const vegetables = require("./data/vegetables.json")
const frozen = require("./data/frozen.json")
const exotic = require("./data/exotic.json")
const organic = require("./data/organic.json")
const freshlycut = require("./data/freshlycut.json")
const cors = require("cors")

//Importing modules
const mysql = require("mysql2");
const connection = require("./database");

//Defining routes
const customerRouter = require("./routes/customers");
const offerRouter = require("./routes/offers");
const categoryRouter = require("./routes/categories");
const feedbackRouter = require("./routes/feedbacks");
const paymentRouter = require("./routes/payments");
const inventoryRouter = require("./routes/inventories");
const orderRouter = require("./routes/orders");
const dealRouter = require("./routes/deals");


//Using routes
app.use("/customers", customerRouter);
app.use("/offers", offerRouter);
app.use("/categories", categoryRouter);
app.use("/feedbacks", feedbackRouter);
app.use("/payments", paymentRouter);
app.use("/inventories", inventoryRouter);
app.use("/orders", orderRouter);
app.use("/deals", dealRouter);

const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

app.get('/fruits', (req, res) => {
    res.json(fruits)
    console.log(fruits)
})

app.get('/vegetables', (req, res) => {
    res.json(vegetables)
    console.log(vegetables)
})

app.get('/frozen', (req, res) => {
    res.json(frozen)
    console.log(frozen)
})

app.get('/exotic', (req, res) => {
    res.json(exotic)
    console.log(exotic)
})

app.get('/organic', (req, res) => {
    res.json(organic)
    console.log(organic)
})

app.get('/freshlycut', (req, res) => {
    res.json(freshlycut)
    console.log(freshlycut)
})

app.listen(5000, () => {
    console.log("listening to requests in port 5000");
})