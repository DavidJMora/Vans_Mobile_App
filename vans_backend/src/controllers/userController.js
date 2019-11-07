let User = require('../models/User');
let authHelper = require('../utils/authHelper');

module.exports = {
    userLogin: async (req, res) => {
        try {
            let foundUser = await authHelper.findOneUser(req.body.employee_number)
            if(foundUser === 404) {
                throw "User not found, please try again."
            }
            let comparedPassword = await authHelper.comparePassword(req.body.password, foundUser.password)
            if(comparedPassword === 409) {
                throw 'Invalid password or username.'
            }
            res.status(200).json({
                message: 'Login Successful',
                foundUser
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }
}