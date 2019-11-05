const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CategorySchema = new Schema({
    category: { type: String, unique: true },
})

module.exports = mongoose.model('Category', CategorySchema);