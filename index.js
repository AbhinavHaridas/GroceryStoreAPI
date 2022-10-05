const PORT = 8000
const express = require('express')

let app = express()

app.get('/', (req, res) => {
    res.json({"description" : "Here goes json 1"})
})

app.get('/fruits', (req, res) => {
    res.json({"description" : "Here goes json 2"})
})

app.get('/vegetables', (req, res) => {
    res.json({"description" : "Here goes json 3"})
})

app.listen(PORT, () => console.log(`listening to requests on port ${PORT}`))