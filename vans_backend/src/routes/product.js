
const express = require('express');
const router = express.Router();

let productController = require('../controllers/productController');

router.get('/all-categories', productController.getAllCategories);

router.get('/all-shoe-style-by-id/:categoryID', productController.getShoeStyleById);

router.get('/all-product-by-id/:shoeStyleID', productController.getProductById);

module.exports = router;