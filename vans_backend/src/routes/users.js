const express = require('express');
const router = express.Router();

let userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', userController.userLogin)

module.exports = router;
