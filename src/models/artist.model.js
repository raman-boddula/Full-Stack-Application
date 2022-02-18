const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    'first_name': { type: 'string', required: true },
    'last_name': { type: 'string', required: true },
    'gender': { type: 'string', required: true },
    'username': { type: 'string', required: true, unique: true },
    'password': { type: 'string', required: true }
}, {
    versionKey: false,
    timestamp: true
});
module.exports = mongoose.model('artist', artistSchema);