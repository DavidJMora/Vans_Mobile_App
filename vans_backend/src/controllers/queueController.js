let Queue = require('../models/Queue');
let Product = require('../models/Product');
let TempProduct = require('../models/TempProduct');
let controllerHelper = require('../utils/controllerHelper');

module.exports = {
    getQueue: async (req, res) => {
        try {
            let queue = await Queue.find({})
            console.log(queue)
            res.status(200).json(queue)
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    },
    addProductToQueue: async (req, res) => {
        let { productID, queueID } = req.params;

        try {
            let product = await Product.findById({_id: productID});

            let newProduct = await controllerHelper.createTempProduct(product, req.body);
            let queue = await Queue.findById({_id: queueID})
            
            await queue.items.push(newProduct);

            await queue.save();

            res.status(200).json(queue)
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }
}