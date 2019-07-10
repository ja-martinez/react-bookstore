import React from 'react';
import BooksList from './BooksList'

function BooksContainer({ books, addToCart }) {

  return (
    <div id="books" className="container">
      <div className="section-header">
        <h2>Books</h2>
      </div>
      <BooksList books={books} addToCart={addToCart} />
    </div>
  )
}

export default BooksContainer;