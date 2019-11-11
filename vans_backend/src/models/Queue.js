const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

let QueueSchema = new Schema({
    items: [{
        shoeStyle: {
            type: Schema.Types.ObjectId,
            ref: 'ShoeStyle'
        },
        product: { type: String, default: '' },
        description: { type: String, default: ''},
        image: { type: String, default: '' },
        size: { type: Number, default: '' },
        user: {
            sentBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
            receivedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null }
        },
        timestamp: {type: String, default: () => moment().format('dddd, MMMM Do YYYY, kk:mm:ss')}
    }],
    timestamp: {type: String, default: () => moment().format('dddd, MMMM Do YYYY, kk:mm:ss')}
})

module.exports = mongoose.model("Queue", QueueSchema)