const express = require('express');
const app = express();
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

require('dotenv').config();

const port = process.env.PORT

const server = app.listen(port, function() {
    console.log("Express server has started on port " + port)
});

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/boardcreate');
autoIncrement.initialize(mongoose.connection)

app.use(express.json())

const router = require('./routes')

require('./routes')(app);