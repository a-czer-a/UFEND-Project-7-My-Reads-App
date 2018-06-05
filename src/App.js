import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './Books'
import Search from './Search'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    updatedBooks: [],
    allowOnLogging: false,
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

    BooksAPI.update(book, updatedShelf).then((res) => {
      this.state.updatedBooks.push(book)
      this.setState(state => ({
        books: state.books.concat([this.state.updatedBooks])
      }))
  })}


  render() {
    return (
      <div className="app">        
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            < Books 
                books={this.state.books} 
                onUpdate={this.updateShelf}
            />

            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>

      </div>
    )
  }
}
export default BooksApp
