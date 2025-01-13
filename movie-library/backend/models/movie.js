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
  }
});

module.exports = mongoose.model('Movie', movieSchema);