//A reusable search bar component (you may choose to use this or place the input directly in the Search page).

import React from 'react';
const SearchBar = ({ ingredient, setIngredient, onSearch }) => {
 return (
  <div className="search-bar">
   <input
    type="text"
    value={ingredient}
    onChange={(e) => setIngredient(e.target.value)}
    placeholder="Enter ingredient"
   />
   <button onClick={onSearch}>Search</button>
  </div>
 );
};

export default SearchBar;