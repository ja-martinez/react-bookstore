import React from 'react'
import buttonSvg from '../plus-circle-solid.svg'

function AddButton({ addToCart, book }) {

  const addClick = () => {
    addToCart(book.id)
  }

  return (
    <div className="add-button-container">
      <img onClick={addClick} className="buttons" src={buttonSvg} alt=""/>
    </div>
  )
}

export default AddButton;