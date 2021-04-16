const { Brand } = require("../models");

// methods for the booksController
module.exports = {
  findAll: function (req, res) {
    Brand.find({})
      .then((dbBrand) => res.json(dbBrand))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  findById: function (req, res) {
    Brand.findById(req.params.id)
      .then((dbBrand) => res.json(dbBrand))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  add: function (req, res) {
    Brand.create(req.body)
      .then((dbBrand) => res.json(dbBrand))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  update: function (req, res) {
    Brand.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbBrand) => res.json(dbBrand))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    Brand.deleteOne({ _id: req.params.id })
      .then((dbBrand) => res.json(dbBrand))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
