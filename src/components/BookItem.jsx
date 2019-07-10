import React from 'react';
import AddButton from './AddButton'

function BookItem({ book, addToCart }) {
  return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-5">{book.title}</div>
          <div className="col-md-4">{book.author}</div>
          <div className="col-md-2">{book.pages}</div>
          <div classNAme="col-md-1" ><AddButton addToCart={addToCart} book={book} /></div>
        </div>
      </div>
  )
}

export default BookItem;