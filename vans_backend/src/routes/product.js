
const express = require('express');
const router = express.Router();

let productController = require('../controllers/productController');

router.get('/all-categories', productController.getAllCategories);
//* the id is not the id of the shoe style but the category for which it is nested in
router.get('/all-shoe-style-by-id/:categoryID', productController.getShoeStyleById);
//* same goes for products. it uses the id of the shoestyle 
router.get('/all-product-by-id/:shoeStyleID', productController.getProductById);

module.exports = router;