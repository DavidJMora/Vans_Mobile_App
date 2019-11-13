// No longer necessary. Combined with the shoeStyle Schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema ({
    shoeStyle: {
        type: Schema.Types.ObjectId,
        ref: 'ShoeStyle'
    },
    product: { type: String, default: '' },
    description: { type: String, default: ''},
    image: { type: String, default: '' },
    size: { type: String, default: null },
    user: {
        sentBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
        receivedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null }
    },
})

module.exports = mongoose.model('Product', ProductSchema)