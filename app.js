const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment-timezone');

var app = express();
app.use(bodyParser.json());

app.get('/heoll', (req, res, ) => {
    res.status(200).json({
        message: "hello world!"
    })
})

app.post('/', (req, res) => {
    const person = {
        name: req.body.name,
        age: req.body.age
    }

    res.status(200).json({
        msg: "person data successd",
        getPerson: person
    })
})
app.listen(3000, () => {
    console.log(moment().tz("Asia/Taipei").format())
    console.log("ttp://localhost:3000")
})