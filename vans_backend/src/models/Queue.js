const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const uuidV4 = require('uuid/v4');

let QueueSchema = new Schema({
    items: [{
        category: {
            categoryID: { type: Schema.Types.ObjectId, ref: 'Category' },
            categoryName: { type: String, default: '' }
        },
        styleID: { type: Schema.Types.ObjectId, ref: 'ShoeStyle'},
        shoeStyle: { type: String, default: '' },
        color: { type: String, default: ''},
        image: { type: String, default: '' },
        size: { type: Number, default: '' },
        user: {
            sentBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
            receivedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null }
        },
        timestamp: {type: String, default: () => moment().format('dddd, MMMM Do YYYY, kk:mm:ss')},
        queueID: { type: String, default: () => uuidV4()}
    }],
    timestamp: {type: String, default: () => moment().format('dddd, MMMM Do YYYY, kk:mm:ss')}
})

module.exports = mongoose.model("Queue", QueueSchema)