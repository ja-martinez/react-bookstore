import React from 'react'

function SearchBar({ changeSearch }) {

  const searchHandler = (e) => {
    changeSearch(e.target.value);
  }

  return (
    <div className="search-bar">
      <input onChange={searchHandler} type="text" class="form-control" placeholder="Search Books by Author or Title"/>
    </div>
  )
}

export default SearchBar;