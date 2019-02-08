const User = require('../Models/userModel');
const Movie = require('../models/movieModel');
const jwt = require('jsonwebtoken');


exports.addUser = (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,

  });

  user.save().then(() => {
    res.status(201).json(user.toObject());
  })
    .catch((error) => {
      console.log(error);
    })
};

exports.login = (req, res) => {
  User.findOne({ email: req.body.email }, (error, user) => {
    if (user !== null && user.validatePassword(req.body.password)) {
      jwt.sign(user.sanitize(), process.env.JWT_SECRET, { expiresIn: '1d' }, (err, token) => {
        console.log(err);
        res.status('200').json({ token });
      });
    } else {
      res.status(401).send();
    }
  });
};

exports.addMovie = (req, res) => {
  const movie = new Movie({
    title: req.body.title,
  });

  movie.save().then(() => {
    res.status(201).json(book);
  })
    .catch(error => {
      console.log(error);
    });
}