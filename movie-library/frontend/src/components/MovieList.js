import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';


const MovieList = ({movies, onUpdate}) => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/movies');
        setMovieList(response.data);
      } catch (error) {
        console.error('Error fetching movies', error);
      }
    };
    fetchMovies();
  }, []);

  const handleUpdate = (updatedMovie) => {
    setMovieList((prevMovies) => prevMovies.map((movie) =>   movie._id === updatedMovie._id ? updatedMovie : movie));
  };

  const handleFavoriteClick = async(movie) => {
    console.log(`Favorite clicked for movie: ${movie.title}`);
    try{
      const response = await axios.put(`/movies/${movie._id}/favorite`);
      onUpdate(response.data.movie);
    }
    catch(error){
      console.error('Error updating favorite status',error); 
    }
  };

  
  return (
    <div>
      <div className="movies-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <button 
              className="favorite-button" 
              onClick={() => handleFavoriteClick(movie)}
            >
              Favorite
            </button>
            <MovieCard key={movie._id} movie={movie} onUpdate={handleUpdate} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;