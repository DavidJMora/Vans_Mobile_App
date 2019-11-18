const express = require('express');
const router = express.Router();

let queueController = require('../controllers/queueController');

router.get('/get-queue', queueController.getQueue);

router.post('/add-product-to-queue/:productID', queueController.addProductToQueue)

router.delete('/remove-product-from-queue/:queueID', queueController.removeProductFromQueue)


module.exports = router;