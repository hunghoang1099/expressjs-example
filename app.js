const express = require('express');
const mongoose = require('mongoose');
const ClientIP = require('./models/client.model');
const middleware = require('./middleware/index');
require('dotenv').config();


const app = express();

mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/echo', middleware.verifyToken, async (req, res) => {
    var body = new ClientIP();
    body.ip = req.ip;
    body.data = req.query.data;

    body.save(function (err, data) {
        if (err) console.log(err);
        res.json(data)
    })
})

app.get('/list', async (req, res) => {
    const data = await ClientIP.find();
    res.status(200).send(data);
})

app.listen(process.env.PORT);

console.log(`Server listen on port ${process.env.PORT}`);