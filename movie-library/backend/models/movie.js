const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  isFavorite: { 
    type: Boolean, 
    default: false 
  }, 
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;