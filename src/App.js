// basic
import React from 'react'
// API
import * as BooksAPI from './BooksAPI'
// React Router
import {Route, Link, Switch} from 'react-router-dom'
// Components
import Books from './Books'
import Search from './Search'
import BookDetails from './BookDetails'
// Styling
import './App.css'
import './MediaQueries.css'

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
              <Switch>
                  <Route exact path="/search" render={(history) => (
                      <Search 
                          books = {this.state.books}
                          onUpdate = {this.updateShelf}
                      />     
                  )}/> 
                  <Route exact path="/" render={(history) => ( 
                      <div className="list-books">
                        <div className="list-books-title">
                          <h1>MyReads</h1>
                        </div>
                        <Books 
                            books={this.state.books} 
                            onUpdate={this.updateShelf}
                        />
                        <div className="open-search">
                          <Link to="/search">Add a book</Link >
                        </div>
                      </div>
                  )}/>
                  <Route path="/details/:bookId" render={(props) => (
                        <BookDetails
                            id={props.match.params.bookId}
                            onUpdate={this.updateShelf}
                        />
                    )}/>
              </Switch>
          </div>
        )
  }
}

export default BooksApp
