import React from 'react'

const MovieList = ({movies}) => {


  
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

      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <img 
            src = {`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          ></img>
        </div>
      ))}
    </div>
  );
};

export default MovieList;