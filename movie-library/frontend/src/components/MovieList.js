import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';


const MovieList = ({movies}) => {

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

  
  return (
    <div>
      {/* <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>{movie.releaseDate}</p>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} loading="lazy" />
          </li>
        ))}
      </ul>   */}

            <div className="movies-list">
            {movies.map((movie) => (
                <MovieCard key={movie._id} movie={movie} onUpdate={handleUpdate} />
            ))}
        </div>
      {/* {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <img 
            src = {`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          ></img>
        </div>
      ))} */}
    </div>
  );
};

export default MovieList;