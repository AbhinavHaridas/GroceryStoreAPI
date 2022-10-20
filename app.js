const express = require('express')
const app = express()
const fruits = require("./fruits.json")
const cors=require("cors")

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

app.get('/fruits', (req, res) => {
    res.json(fruits)
    console.log(fruits)
})

app.listen(5000, () => {
    console.log("listening to requests in port 5000");
})