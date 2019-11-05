const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    employee_number: { type: Number, unique: true },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    jobTitle: { type: String, default: 'Employee' },
    password: { type: String, default: '' }
})

module.exports = mongoose.model('User', UserSchema)