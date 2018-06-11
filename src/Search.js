import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class Search extends Component {

    state = {
        query: '',
        searchResults: [],
        error: false
    }    
    
    loadSearchResults = (query) => {
        if (query) {
            BooksAPI.search(query).then((selectedBooks) => {
                if ('error' in selectedBooks) {
                    this.setState({
                        error: true,
                        searchResults: [],
                        query: query
                    })
                } else {
                this.setState({ 
                    query: query,
                    searchResults: selectedBooks.map((selectedBook) => {
                    const bookIndex = this.props.books.map((book) => (
                        book.id)).indexOf(selectedBook.id)
                        return bookIndex >= 0 ? this.props.books[bookIndex] : selectedBook
                    })
                })
            }}
        )} else {
            this.setState({
                searchResults: [],
                query: '',
                error: false
            })
        }
    }

    clearQuery = () => {
        this.setState({
            query: '',
            error: false
        })
    }
    
    
    render() {
        const { books, onUpdate } = this.props
        const { query, searchResults } = this.state
        
        return (
                <div className="search-books">
                  <div className="search-books-bar">
                    < Link onClick={this.clearQuery} className="close-search" to="/">Close</Link >
                    <div className="search-books-input-wrapper">
                      {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
      
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                      */}
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.loadSearchResults(event.target.value.trim())}
                        />
                    </div>
                  </div>
                  <div className="search-books-results">
                  {!this.state.error && searchResults && (
                    <ol className="books-grid">
                    {searchResults.map((filteredBook) => (
                        
                        < Book 
                        filteredBook= {filteredBook}
                        onUpdate={onUpdate}
                        key={filteredBook.id}
                        />
                    ))}
                    </ol>
                  )}
                  {this.state.error && (
                      <div>No search results.</div>
                  )}
                  {!this.state.query && (
                      <div className="book-details">
                            <p>The search from BooksAPI is limited to a particular set of search terms. You can find those search terms here:</p>
                            <p className="html-address">https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md</p>
                      </div>
                  )}

                    
                  </div>
                </div>
        )
    }
}

export default Search