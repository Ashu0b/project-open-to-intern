const express = require('express');
const mongoose = require('mongoose')
var bodyParser = require('body-parser');
var multer = require('multer');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());

mongoose.connect("mongodb+srv://prakash:prakash@cluster0.4qxv0.mongodb.net/project-intern?authSource=admin&replicaSet=atlas-13sjqg-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", { useNewUrlParser: true })
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
})


