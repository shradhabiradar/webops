const mongoose = require('mongoose');
const shortId = require('shortid');

const urlSchema = new mongoose.Schema({
    full:{
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    }
},{
    timestamps: true
});

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;