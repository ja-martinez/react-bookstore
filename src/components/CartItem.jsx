import React from 'react';
import DeleteButton from './DeleteButton';

function CartItem({ book, deleteFromCart }) {
  return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-5">{book.title}</div>
          <div className="col-md-4">{book.author}</div>
          <div className="col-md-2">{book.pages}</div>
          <div className="col-md-1"><DeleteButton book={book} deleteFromCart={deleteFromCart} /></div>
        </div>
      </div>
  )
}

export default CartItem;