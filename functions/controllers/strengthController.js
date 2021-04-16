const { Strength } = require("../models");

// methods for the booksController
module.exports = {
  findAll: function (req, res) {
    Strength.find({})
      .then((dbStrength) => res.json(dbStrength))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  findById: function (req, res) {
    Strength.findById(req.params.id)
      .then((dbStrength) => res.json(dbStrength))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  add: function (req, res) {
    Strength.create(req.body)
      .then((dbStrength) => res.json(dbStrength))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  update: function (req, res) {
    Strength.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbStrength) => res.json(dbStrength))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    Strength.deleteOne({ _id: req.params.id })
      .then((dbStrength) => res.json(dbStrength))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
