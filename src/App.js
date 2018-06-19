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
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    bookForDetails: {}
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({books})
    })
}    

  updateShelf = (updatedBook, updatedShelf) => {
    updatedBook.shelf = updatedShelf
    BooksAPI.update(updatedBook, updatedShelf).then(() => {
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
      < Route path="/details/:bookId" render={(props, history) => (
            < BookDetails
                id={props.match.params.bookId}
                onUpdate={this.updateShelf}
            />
        )}/>
      </div>
    )
  }
}
export default BooksApp
