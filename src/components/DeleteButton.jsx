import React from 'react'
import buttonSvg from '../times-circle-solid.svg'

function AddButton({ deleteFromCart, book }) {

  const deleteClick = () => {
    console.log('clicked!')
    deleteFromCart(book.id)
  }

  return (
    <div className="delete-button-container">
      <img onClick={deleteClick} className="buttons" src={buttonSvg} alt=""/>
    </div>
  )
}

export default AddButton;