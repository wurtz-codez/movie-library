import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
useEffect(()=> {
  const fetchFavorites = async () => {
    try{
      const response = await axios.get('http://localhost:5000/movies/favorites');
      setFavoriteMovies(response.data);
    }
    catch (error){
      console.error('Error fetching favorite movies', error);
    }
  }

  fetchFavorites();
}, []);

  
  return (
        <div>
            <h1>Favorite Movies</h1>
            {favoriteMovies.length > 0 ? (
                favoriteMovies.map(movie => (
                    <div key={movie._id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                    </div>
                ))
            ) : (
                <p>No favorite movies found.</p>
            )}
            </div>
  );
};

export default Favorites