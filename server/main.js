const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const DataModel = require('./models/VisitsModel');

const app = express();
const port = 3001;

mongoose.connect('mongodb://127.0.0.1:27017/metrica');

// Разрешение CORS (если нужно)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());

app.get('/getVisits', (req, res) => {
    DataModel.find()
        .then(visits => res.json(visits))
        .catch(err => res.json(err));
});

//PUT - UPDATE (ALTER), а POST - CREATE, GET - SELECT
app.post('/addVisit', (req, res) => {
    const {ip, browser, os, device} = req.body;

    try {
        const newVisit = new DataModel({
            ip,
            browser,
            os,
            device,
        });

        newVisit.save()
            .then(visit => res.json(visit))
            .catch(err => res.json(err));
    } catch (e) {
        console.log("ERROR OCCURRED WHILE TRYING TO ADD NEW ORDER: ", e);
    }
})

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});