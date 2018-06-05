import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './Books'
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
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({books})
    })
}    

  // updateShelf = (updatedBook, updatedShelf) => {
  //   BooksAPI.update(updatedBook, updatedShelf).then(() => {
  //     updatedBook.shelf = updatedShelf
  //     this.setState(state => ({
  //       books: state.books
  //     }))
  //   })

  updateShelf = (book, event) => {
    const updatedShelf = event.target.value
    book.shelf = updatedShelf
    this.state.updatedBooks.push(book)
    console.log(this.state.updatedBooks, updatedShelf)
      if (book.shelf !== updatedShelf) {
        this.setState(state => {
          books: state.books.concat([this.state.updatedBooks])
      }
    )
  }
}


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
