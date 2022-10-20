const express = require('express')
const app = express()
const fruits = require("./data/fruits.json")
const vegetables = require("./data/vegetables.json")
const frozen = require("./data/frozen.json")
const cors = require("cors")

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

app.listen(5000, () => {
    console.log("listening to requests in port 5000");
})