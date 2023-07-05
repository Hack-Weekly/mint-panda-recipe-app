import { searchRecipe } from "../util/api_external"
import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    searchRecipe({ query });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input style={{ outline: "black solid 2px" }} type="text" value={query} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search