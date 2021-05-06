const mongoose = require('mongoose');

var clientIP = new mongoose.Schema({
    ip: { type: String, required: true },
    data: { type: String, required: true }
});

module.exports = mongoose.model('client_ip', clientIP);