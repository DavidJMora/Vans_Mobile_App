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
            
            let queue = await Queue.find({})
            
            await queue[0].items.push(product);

            await queue[0].save();
        
            let lastItem = queue[0].items[queue[0].items.length-1]
            res.status(200).json(lastItem)
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    },
    removeProductFromQueue: async (req, res) => {
        let { queueID } = req.params;

        try {
            let arrOfQueues = await Queue.find({});
            let queue = arrOfQueues[0];
            
            let product = await queue.items.filter(item => item.queueID === queueID)
            let newQueue = await queue.items.filter(item => item.queueID !== queueID)
            
            queue.items = newQueue;
        
            await arrOfQueues[0].save()
            
            res.status(200).json(product)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
}



