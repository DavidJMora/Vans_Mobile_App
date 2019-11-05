const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ShoeStyleSchema = new Schema({
    shoeStyle: { type: String, default: ''},
    category: { type: Schema.Types.ObjectId, ref: 'Category'} 
})

module.exports = mongoose.model('ShoeStyle', ShoeStyleSchema);