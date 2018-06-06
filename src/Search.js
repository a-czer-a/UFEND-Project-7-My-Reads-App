import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class Search extends Component {

    state = {
        query: '',
        searchResults: []
    }    
    
    loadSearchResults = (query) => {
        if (query) {
            this.setState(
                { query: query.trim() }
            )
            BooksAPI.search(query).then((books) => (
                    this.setState({ 
                            searchResults: books,
                            query: query
                        })
            ))
        } else {
            this.setState({
                searchResults: [],
                query: ''
            })
        }
    }

    clearQuery = () => {
        this.setState(
            { query: ''}
        )
    }

    render() {

        const { books, onUpdate } = this.props
        const { query, searchResults } = this.state

        console.log(searchResults)
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
                            onChange={(event) => this.loadSearchResults(event.target.value)}
                        />
                    </div>
                  </div>
                  <div className="search-books-results">
                  {searchResults && (
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
                  {query && !searchResults && (
                      <div>No search results.</div>
                  )}
                    
                  </div>
                </div>
        )
    }
}

export default Search