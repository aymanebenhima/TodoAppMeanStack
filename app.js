const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config  = require('./config/database');
const api = require('./route/api');

const PORT = 3000;

// connection db
mongoose.connect(config.database, { useNewUrlParser: true});

//on connection db
mongoose.connection.on('connected', ()=>{
    console.log('MongoDb connected to db' + config.database);
})

//on error
mongoose.connection.on('error', (err)=>{
    console.log('database connection error ' + err);
})
const app = express();

app.use('/api' , api);

app.get('/' , (req, res)=>{
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

//---starting Server---

app.listen(PORT, ()=>{
    console.log('Server started on port:' + PORT);
})