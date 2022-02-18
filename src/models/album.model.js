const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    year:{type: Number, required: true},
}, {
    versionKey: false,
    timestamps:true
});
module.exports = mongoose.model('album', albumSchema);
