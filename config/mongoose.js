const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quora_developement');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to db'));
db.once('open',function(){
    console.log('connected to database');

})

module.exports = db;