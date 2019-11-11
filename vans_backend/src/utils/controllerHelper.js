const TempProduct = require('../models/TempProduct');

async function createTempProduct(initial, info) {
    let { shoeStyle, product, description, image } = initial
    let { size, user } = info

    try {
        let newProduct = await new TempProduct({
            shoeStyle: shoeStyle,
            product: product,
            description: description,
            image: image,
            user: {
                sentBy: user.sentBy,
                receivedBy: user.receivedBy
            },
            size: size
        });

        return newProduct

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports = {
    createTempProduct
}
