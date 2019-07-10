import React from 'react';
import './App.css';
import BooksContainer from './components/BooksContainer'
import CartContainer from './components/CartContainer'

class App extends React.Component {
  state = {
    books: []
  }

  loadBooks = async () => {
    const response = await fetch('http://localhost:8082/api/books')
    const books = await response.json();
    this.setState({ books: books });
  }

  async componentDidMount () {
    this.loadBooks();
  }

  addToCart = async (id) => {
    await fetch(`http://localhost:8082/api/books/cart/add/${id}`, {
      method: 'PATCH'
    })
    this.loadBooks();
  }

  deleteFromCart = async (id) => {
    await fetch(`http://localhost:8082/api/books/cart/remove/${id}`, {
      method: 'PATCH'
    })
    this.loadBooks();
  }

  render() {
    //console.log(JSON.stringify(this.state.books))
    let booksInCart = this.state.books.filter(book => book.inCart)
    return (
      <div id="app">
        <BooksContainer books={this.state.books} addToCart={this.addToCart} />  
        <CartContainer books={booksInCart} deleteFromCart={this.deleteFromCart} />
      </div>
    );
  }
  
}

export default App;
