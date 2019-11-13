const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ShoeStyleSchema = new Schema({
    category: { 
        categoryID: { type: Schema.Types.ObjectId, ref: 'Category' },
        categoryName: { type: String, default: '' }
    },
    shoeStyle: { type: String, default: '' },
    color: { type: String, default: ''},
    image: { type: String, default: '' },
    size: { type: String, default: null },
    user: {
        sentBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
        receivedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null }
    }
})

module.exports = mongoose.model('ShoeStyle', ShoeStyleSchema);