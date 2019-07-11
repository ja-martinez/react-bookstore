import React from 'react'

function SortSelect({ changeSort }) {
  
  const handleSelect = (e) => {
    changeSort(e.target.value)
  }
  
  return (
    <div className="sort-select">
      <select onChange={handleSelect} className="custom-select">
        <option value="title">Sort by Title</option>
        <option value="author">Sort by Author</option>
      </select>
    </div>
  )
}

export default SortSelect;