import React from 'react';
import './App.css';
import BooksContainer from './components/BooksContainer'
import CartContainer from './components/CartContainer'

class App extends React.Component {
  state = {
    books: [],
    sortBy: 'title',
    searchBy: ''
  }

  loadBooks = async () => {
    const response = await fetch('http://localhost:8082/api/books')
    let books = await response.json();
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

  changeSort = (sortBy) => {
    this.setState({ sortBy });
  }

  changeSearch = (searchBy) => {
    this.setState({ searchBy });
  }

  sortBooks = () => {
    let booksDisplay = [];
    if (this.state.sortBy === 'title') {
      booksDisplay = this.state.books.sort((book1, book2) => {
        if (book1.title < book2.title) {
          return -1;
        } else if (book1.title > book2.title) {
          return 1;
        } else {
          return 0;
        }
      })
    }else if (this.state.sortBy === 'author') {
      booksDisplay = this.state.books.sort((book1, book2) => {
        if (book1.author < book2.author) {
          return -1;
        } else if (book1.author > book2.author) {
          return 1;
        } else {
          return 0;
        }
      })
    }

    return booksDisplay;
  }

  render() {
    let booksDisplay = this.sortBooks();
    let searchResults = booksDisplay.filter(book => book.title.toUpperCase().includes(this.state.searchBy.toUpperCase()) || book.author.includes(this.state.searchBy))
    let booksInCart = this.state.books.filter(book => book.inCart)
    let cartTotal = booksInCart.reduce((acc, book) => acc + book.price, 0)
    return (
      <div id="app">
        <BooksContainer books={searchResults} addToCart={this.addToCart} changeSort={this.changeSort} changeSearch={this.changeSearch} />  
        <CartContainer books={booksInCart} deleteFromCart={this.deleteFromCart} cartTotal={cartTotal} />
      </div>
    );
  }
  
}

export default App;
