const { Cardio } = require("../models");

// methods for the booksController
module.exports = {
  findAll: function (req, res) {
    Cardio.find({})
      .then((dbCardio) => res.json(dbCardio))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  findById: function (req, res) {
    Cardio.findById(req.params.id)
      .then((dbCardio) => res.json(dbCardio))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  add: function (req, res) {
    Cardio.create(req.body)
      .then((dbCardio) => res.json(dbCardio))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  update: function (req, res) {
    Cardio.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbCardio) => res.json(dbCardio))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    Cardio.deleteOne({ _id: req.params.id })
      .then((dbCardio) => res.json(dbCardio))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
