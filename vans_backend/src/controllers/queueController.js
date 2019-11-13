let Queue = require('../models/Queue');
let Product = require('../models/Product');

module.exports = {
    getQueue: async (req, res) => {
        try {
            let queue = await Queue.find({})
            console.log(queue)
            res.status(200).json(queue[0].items)
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    },
    addProductToQueue: async (req, res) => {
        let { data } = req.body;
        let { productID } = req.params;
        
        try {
            let product = await Product.findById({_id: productID});

            product.size = data.size.toString();
            product.user.sentBy = data.user.sentBy;
            product.user.receivedBy = data.user.receivedBy;
            
            let queue = await Queue.find({})
            
            await queue[0].items.push(product);

            await queue[0].save();
            
            res.status(200).json(product)
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    },
    removeProductFromQueue: async (req, res) => {
        
    }
}