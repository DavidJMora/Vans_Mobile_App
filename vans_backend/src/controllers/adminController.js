let Product = require('../models/Product');
let User = require('../models/User');
let ShoeStyle = require('../models/ShoeStyle');
let Category = require('../models/Category');
let faker = require('faker')
let Queue = require('../models/Queue');

//* All Methods here are to be used with Postman and Atlas in order to save time on frontend

module.exports = {
    //No longer in use
    createProduct: (req, res) => {
        
        for(let i = 0; i < 25; i++) {
            
            let newProduct = new Product();

            newProduct.shoeStyle = req.params.shoeStyleID;
            newProduct.product = faker.lorem.words();
            newProduct.description = faker.lorem.words();
            newProduct.image = faker.image.image();

            newProduct.save();
        }

            res.json('25 Products Created')
    },
    // Now takes in modified data from individual product
    createShoeStyle: async (req, res) => {
        // console.log(req.params.categoryID)
        let newShoeStyle = new ShoeStyle();
        
        let category = await Category.findById({_id: req.params.categoryID})
        
        newShoeStyle.shoeStyle = req.body.shoeStyle;
        newShoeStyle.category.categoryID = category._id;
        newShoeStyle.category.categoryName = category.categoryName;
        // console.log(newShoeStyle)
        newShoeStyle.save();

        res.json({
            message: 'shoeStyle created',
            data: {
                newShoeStyle
            }
        })


    },
    createCategory: (req, res) => {
        
        let newCategory = new Category();

        newCategory.categoryName = req.body.categoryName;

        newCategory.save();

        res.json('Category Created')
    },
    createUser: (req, res) => {

        let newUser = new User();

        newUser.employee_number = req.body.employee_number,
        newUser.firstName = req.body.firstName,
        newUser.lastName = req.body.lastName,
        newUser.jobTitle = req.body.jobTitle
        newUser.password = req.body.password,
        
        newUser.save()

        res.json('User Created')
    },
    createQueue: (req, res) => {

        let newQueue = new Queue();

        newQueue.save();

        res.json('Queue Created')
    }
}



