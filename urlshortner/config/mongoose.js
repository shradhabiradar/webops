// we have installed mongoose by npm, now we have to use this package so we 'require'

const mongoose = require('mongoose');

// connect to the local host
mongoose.connect('mongodb://localhost/url_shortner');
// mongoose is exposed and have nly one DB connection
const db = mongoose.connection;

// check if the mongoose has connected successfully
db.on('error', console.error.bind(console, 'error in connecting the mongodb'));

db.once('open', function(){
    console.log('mongodb connected successfully');
});

// exporting module so that it is available outsite this module
module.exports = db;
