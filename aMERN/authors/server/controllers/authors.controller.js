const Author = require("../models/authors.model");

module.exports = {
    // Read All
    findAll: (req, res) => {
        Author.find()
            .then(all => {
                res.json(all);
            })
            .catch(err =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    // Find One By Id
    findOne: (req, res) => {
        Author.findById(req.params.id)
            .then(oneById => res.json(oneById))
            .catch(err =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    // Create
    createOne: (req, res) => {
        Author.create(req.body)
            .then(newThing => res.json(newThing))
            .catch(err =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    // Update
    update: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
            .then(updatedThing => res.json(updatedThing))
            .catch(err =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    // Delete
    delete: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
};
