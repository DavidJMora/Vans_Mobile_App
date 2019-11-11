const express = require('express');
const router = express.Router();

let adminController = require('../controllers/adminController');

router.post('/create-product/:shoeStyleID', adminController.createProduct);

router.post('/create-category', adminController.createCategory);

router.post('/create-shoe-style/:categoryID', adminController.createShoeStyle);

router.post('/create-user', adminController.createUser);

router.post('/create-queue', adminController.createQueue);

module.exports = router;