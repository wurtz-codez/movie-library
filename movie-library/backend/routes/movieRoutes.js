const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

// we will fetch all the movies
router.get('/', async(req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

//route to toggle favorite status
router.put('/:id/favorite', async (req, res) => {
  try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) {
          return res.status(404).json({ message: 'Movie not found' });
      }

      movie.isFavorite = !movie.isFavorite; // Toggle favorite status
      await movie.save();

      res.status(200).json({ message: 'Favorite status updated', movie });
  } catch (error) {
      res.status(500).json({ message: 'Server error', error });
  }
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