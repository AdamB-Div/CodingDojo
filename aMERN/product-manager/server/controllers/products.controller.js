const Product = require("../models/products.model");

// FULL CRUD

// READ ALL
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => {
            res.json(allProducts);
        })
        .catch(err =>
            res.json({ message: "Something went wrong", error: err })
        );
};

// FIND ONE
module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => res.json(oneProduct))
        .catch(err =>
            res.json({ message: "Something went wrong", error: err })
        );
};

// CREATE
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json(newlyCreatedProduct))
        .catch(err =>
            res.json({ message: "Something went wrong", error: err })
        );
};

// UPDATE
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then(updatedThing => res.json(updatedThing))
        .catch(err =>
            res.json({ message: "Something went wrong", error: err })
        );
};

// DELETE
module.exports.deleteThing = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err =>
            res.json({ message: "Something went wrong", error: err })
        );
};
