const { Featured } = require("../models");

// methods for the booksController
module.exports = {
  findAll: function (req, res) {
    Featured.find({})
      .then((dbFeatured) => res.json(dbFeatured))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  findById: function (req, res) {
    Featured.findById(req.params.id)
      .then((dbFeatured) => res.json(dbFeatured))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  add: function (req, res) {
    Featured.create(req.body)
      .then((dbFeatured) => res.json(dbFeatured))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  update: function (req, res) {
    Featured.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbFeatured) => res.json(dbFeatured))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    Featured.deleteOne({ _id: req.params.id })
      .then((dbFeatured) => res.json(dbFeatured))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
