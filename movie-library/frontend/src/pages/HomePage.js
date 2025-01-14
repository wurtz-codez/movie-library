import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import { fetchMovies } from '../api'
import './HomePage.css'

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await fetchMovies(query);
    setMovies(results);
  };
  
  return (
    <>
      <div className="header-container">
        <h1 className='title'>Movie Library</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="homepage-container">
        <MovieList movies={movies} />
      </div>
    </>
  )
}

export default HomePage;