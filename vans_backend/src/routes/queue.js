const express = require('express');
const router = express.Router();

let queueController = require('../controllers/queueController');

router.get('/get-queue', queueController.getQueue);

router.post('/add-product-to-queue/:productID', queueController.addProductToQueue)

router.post('/remove-product-from-queue/:productID', queueController.removeProductFromQueue)


module.exports = router;