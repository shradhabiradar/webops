// requiring mongoose 
const mongoose = require('mongoose');
//  used to create short non-sequential url-friendly unique ids
const shortId = require('shortid');

// creating a schema, helps in validation
const urlSchema = new mongoose.Schema({
    //store the url which we get from the user
    full:{
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
//         it generates random id
        default: shortId.generate
    }
},{
    //to matain the time
    timestamps: true
});

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;
