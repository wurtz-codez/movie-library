import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import { fetchMovies } from '../api'

const HomePage = () => {

  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await fetchMovies(query);
    setMovies(results);
  };
  
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  )
}

export default HomePage;