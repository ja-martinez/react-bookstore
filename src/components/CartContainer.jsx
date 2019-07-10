import React from 'react'
import CartList from './CartList'

function CartContainer ({ books, deleteFromCart }) {
  return (
    <div id="cart" className="container">
      <div className="section-header">
        <h2>Cart</h2>
      </div>
      <CartList books={books} deleteFromCart={deleteFromCart} />
    </div>
  )
}

export default CartContainer;