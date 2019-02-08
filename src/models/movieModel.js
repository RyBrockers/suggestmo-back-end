const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
  },

});

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;