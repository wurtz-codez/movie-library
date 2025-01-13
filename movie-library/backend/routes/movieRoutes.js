const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

// we will fetch all the movies
router.get('/', async(req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// add a movie to favorites
router.post('/', async(req,res) => {
  const{title, description, poster, releaseDate} = req.body;

  const movie = new Movie({
    title,
    description,
    poster,
    releaseDate,
  });

  const createdMovie = await movie.save();
  res.status(201).json(createdMovie);
});

module.exports = router;