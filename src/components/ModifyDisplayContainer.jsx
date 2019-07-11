import React from 'react';
import SearchBar from './SearchBar'
import SortSelect from './SortSelect'

function ModifyDisplayContainer({ changeSort, changeSearch }) {
  return (
    <div className="modify-display-container">
      <SearchBar changeSearch={changeSearch} />
      <SortSelect changeSort={changeSort} />
    </div>
  )
}

export default ModifyDisplayContainer