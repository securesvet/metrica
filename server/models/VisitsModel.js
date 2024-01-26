const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true,
    },
    browser: {
        type: String,
        required: true,
    },
    os: {
        type: String,
        required: true,
    },
    device: {
        type: String,
        required: true,
    }
})

const VisitsModel = mongoose.model('visits', newSchema);
module.exports = VisitsModel;