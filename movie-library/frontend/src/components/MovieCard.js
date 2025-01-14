import React from 'react'
import axios from 'axios'

const MovieCard = ( {movie, onUpdate} ) => {
  const handleFavorite = async()=>{
    try{
      const response = await axios.put(`/movies/${movie._id}/favorite`);
      onUpdate(response.data.movie);
    }
    catch(error){
      console.error('Error updating favorite status',error); 
    }
  }
  
  return (
          <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <button onClick={handleFavorite}>
                {movie.isFavorite ? 'Unfavorite' : 'Favorite'}
            </button>
          </div>
  )
}

export default MovieCard;