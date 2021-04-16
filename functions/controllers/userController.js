const { User } = require("../models");
const bcrypt = require("bcrypt");
const passport = require("passport");

// methods for the userController
module.exports = {
  getUser: function (req, res) {
    if (req.user) {
      User.findOne({ username: req.user.username }).then((dbUser) => {
        res.send({
          id: dbUser._id,
          username: dbUser.username,
        });
      });
    }
  },
  findById: function (req, res) {
    User.findById(req.params.id)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  login: function (req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.sendStatus(401);
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.sendStatus(200);
        });
      }
    })(req, res, next);
  },
  logout: function (req, res) {
    req.logout();
    res.sendStatus(200);
  },
  register: function (req, res) {
    User.findOne({ username: req.body.username }, (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = bcrypt.hash(req.body.password, 10);

        const newUser = new User({
          username: req.body.username,
          password: hashedPassword,
        });
        newUser.save();
        res.send("User Created");
      }
    });
  },
  update: function (req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    User.deleteOne({ _id: req.params.id })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
