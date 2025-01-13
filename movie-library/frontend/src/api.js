import axios from 'axios';

const API_KEY = 'ff0dbcbac6168d5f628fc318773ece52';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });

  return response.data.results;
}