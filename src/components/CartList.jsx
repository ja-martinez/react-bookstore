import React from 'react';
import CartItem from './CartItem'

function CartList({ books, deleteFromCart, cartTotal }) {

  let cartElements = books.map(book => <CartItem key={book.id} book={book} deleteFromCart={deleteFromCart} />)

  return (
    <div className="cart-list">
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-5">Title</div>
            <div className="col-md-4">Author</div>
            <div className="col-md-2">Pages</div>
            <div className="col-md-1"></div>
          </div>
        </div>
        { cartElements }
        <div className="list-group-item">
          Total: ${cartTotal}
        </div>
      </div>
    </div>
  )
}

export default CartList;