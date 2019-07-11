import React from 'react'
import CartList from './CartList'

function CartContainer ({ books, deleteFromCart, cartTotal }) {
  return (
    <div id="cart" className="container">
      <div className="section-header">
        <h2>Cart</h2>
      </div>
      <CartList books={books} deleteFromCart={deleteFromCart} cartTotal={cartTotal} />
    </div>
  )
}

export default CartContainer;