let Queue = require('../models/Queue');
let ShoeStyle = require('../models/ShoeStyle');
module.exports = {
    getQueue: async (req, res) => {
        try {
            let queue = await Queue.find({});
        
            res.status(200).json(queue[0].items)
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    },
    addProductToQueue: async (req, res) => {
        let { size, user, color } = req.body;
        let { productID } = req.params;
        
        try {
            let product = await ShoeStyle.findById({_id: productID});
            product.size = size.toString();
            product.color = color;
            product.user.sentBy = user.sentBy;
            product.user.receivedBy = user.receivedBy;
            product.styleID = user._id
            
            
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