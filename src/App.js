// basic
import React from 'react'
// styling
import './App.css'
import './MediaQueries.css'
// components
import Books from './Books'
import Search from './Search'
import BookDetails from './BookDetails'
// API
import * as BooksAPI from './BooksAPI'
// React Router
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Book from './Book';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    bookForDetails: {}
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({books})
    })
}    

  updateShelf = (updatedBook, updatedShelf) => {
    // const updatedShelf = event.target.value
    updatedBook.shelf = updatedShelf
    BooksAPI.update(updatedBook, updatedShelf).then(() => {
    // const updatedBooks = this.state.books.filter(book => book.id !== updatedBook.id)
    // updatedBooks.push(updatedBook)

      this.setState({
        books: this.state.books.filter(book => book.id !== updatedBook.id).concat([updatedBook])
      })
    })
  }

  render() {
    return (

      <div className="app"> 

      < Route exact path="/search" render={(history) => (
          < Search 
              books = {this.state.books}
              onUpdate = {this.updateShelf}
          />     
      )}/> 

      < Route exact path="/" render={(history) => ( 
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            < Books 
                books={this.state.books} 
                onUpdate={this.updateShelf}
            />

            <div className="open-search">
              < Link to="/search">Add a book</Link >
            </div>
          </div>
      )}/>
      
      < Route path="/details/:bookId" component={BookDetails} onUpdate={this.updateShelf}/>
        
      </div>
    )
  }
}
export default BooksApp
