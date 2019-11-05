let Product = require('../models/Product');
let User = require('../models/User');
let ShoeStyle = require('../models/ShoeStyle');
let Category = require('../models/Category');
let faker = require('faker')

module.exports = {
    createProduct: (req, res) => {
        
        for(let i = 0; i < 25; i++) {
            
            let newProduct = new Product();

            newProduct.shoeStyle = req.params.shoeStyleID;
            newProduct.product = faker.lorem.words();
            newProduct.description = faker.lorem.sentence();
            newProduct.image = faker.image.image();
            newProduct.size = 65;

            newProduct.save();
        }

            res.json('25 Products Created')
    },
    createShoeStyle: (req, res) => {

        let newShoeStyle = new ShoeStyle();

        newShoeStyle.shoeStyle = req.body.shoeStyle;
        newShoeStyle.category = req.params.categoryID;

        newShoeStyle.save();

        res.json('ShoeStyle Created')


    },
    createCategory: (req, res) => {
        
        let newCategory = new Category();

        newCategory.category = req.body.category;

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
    }
}



