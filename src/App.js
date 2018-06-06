// basic
import React from 'react'
// styling
import './App.css'
// components
import Books from './Books'
import Search from './Search'
import BookDetails from './BookDetails'
// API
import * as BooksAPI from './BooksAPI'
// React Router
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    // allowOnLogging: false,
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({books})
    })
}    

  updateShelf = (book, event) => {
    const updatedShelf = event.target.value
    book.shelf = updatedShelf

    BooksAPI.update(book, updatedShelf).then(() => {
      this.setState(this.state)
  })}

  render() {
    return (
      <div className="app"> 


      < Route exact path="/search" render={(history) => (
          < Search 
              books = {this.state.books}
              onUpdate = {this.updateShelf}
          />     
      )}/> 

      < Route exact path="/" render={() => ( 
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
        
      </div>
    )
  }
}
export default BooksApp
