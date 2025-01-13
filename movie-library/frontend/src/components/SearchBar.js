import React, {useState} from 'react'

const SearchBar = ({onSearch}) => {

  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  }
  
  return (
    <form onSubmit = {handleSubmit}>
      <input 
        type='text'
        placeholder='Search for a movie...'
        value={query}
        onChange={handleChange}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBar;
