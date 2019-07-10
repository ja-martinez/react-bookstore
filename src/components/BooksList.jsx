import React from 'react';
import BookItem from './BookItem'

function BooksList({ books, addToCart }) {
  
  let bookElements = books.map(book => <BookItem key={book.id} book={book} addToCart={addToCart} />)

  return (
    <div className="books-list">
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-5">Title</div>
            <div className="col-md-4">Author</div>
            <div className="col-md-2">Pages</div>
            <div className="col-md-1"></div>
          </div>
        </div>
        { bookElements }
      </div>
    </div>
  )
}

export default BooksList;