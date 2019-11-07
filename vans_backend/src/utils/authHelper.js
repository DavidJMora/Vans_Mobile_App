//* need to create helper functions for user controller after initial release for passport and jwt

const User = require('../models/User');

async function findOneUser(employee_number) {
    try {
        let foundUser = await User.findOne({employee_number})
        if (!foundUser) {
            return 404;
        }
        return foundUser
    } catch (error) {
        return error
    }
}

const comparePassword = (incomingPassword, userPassword) => {
    if(incomingPassword === userPassword) {
        return true
    } else {
        throw 409
    }
}

module.exports = {
    findOneUser,
    comparePassword
}