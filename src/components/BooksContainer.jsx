import React from 'react';
import BooksList from './BooksList'
import ModifyDisplayContainer from './ModifyDisplayContainer'

function BooksContainer({ books, addToCart, changeSort, changeSearch }) {

  return (
    <div id="books" className="container">
      <div className="section-header">
        <h2>Books</h2>
      </div>
      <ModifyDisplayContainer changeSort={changeSort} changeSearch={changeSearch} />
      <BooksList books={books} addToCart={addToCart} />
    </div>
  )
}

export default BooksContainer;