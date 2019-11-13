const Category = require('../models/Category');
const ShoeStyle = require('../models/ShoeStyle');
const Product = require('../models/Product');

module.exports = {
    getAllCategories: async(req, res) => {
        try {
            let allCategories = await Category.find({});
            res.status(200).json(allCategories);
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    },
    getShoeStyleById: async(req, res) => {
        const id = req.params.categoryID;

        try{
            let shoeStyleById = await ShoeStyle.find({category: id});
            res.status(200).json(shoeStyleById);
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    },
    // No longer used
    getProductById: async(req, res) => {
        const id = req.params.shoeStyleID;

        try{
            let productById = await Product.find({shoeStyle: id});
            res.status(200).json(productById);
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    },

}