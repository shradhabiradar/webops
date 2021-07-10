const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/url_shortner');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connecting the mongodb'));

db.once('open', function(){
    console.log('mongodb connected successfully');
});


module.exports = db;