import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class Search extends Component {
    static propTypes = {
        onUpdate: PropTypes.func.isRequired
    }

    state = {
        searchResults: [],
        query: '',
        error: false
    }    

    updateQuery = (query) => {
        this.setState({
            query: query
        })
        this.runSearch(query)
    }

    runSearch = (query) => {
        if (query) {
            BooksAPI.search(query).then((selectedBooks) => {
                if ('error' in selectedBooks) {
                    this.setState({
                        searchResults: [],
                        error: true
                    })
                } else {
                    this.setState({ 
                        error: false,
                        searchResults: selectedBooks.map((selectedBook) => {
                            const bookIndex = this.props.books.map((book) => (
                                book.id)).indexOf(selectedBook.id)
                                return bookIndex >= 0 ? this.props.books[bookIndex] : selectedBook
                        })
                    })
                }
            }
        )} else {
            this.setState({
                searchResults: [],
                query: '',
                error: false
            })
        }
    }

    render() {
        const {onUpdate} = this.props
        const {query, searchResults, error} = this.state
        
        return (
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input 
                                type="text" 
                                placeholder="Search by title or author"
                                onChange={(event) => {
                                    this.updateQuery(event.target.value.replace(/^\s+/g, ''))}
                                }
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        {!query && !error && (
                            <div className="search-info">
                                <p>The search from BooksAPI is limited to a particular set of search terms. You can find them here:</p>
                                <p className="html-address">https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md</p>
                            </div>
                        )}
                        {query && searchResults && (
                            <ol className="books-grid">
                                {searchResults.map((filteredBook) => (
                                    <Book 
                                        filteredBook={filteredBook}
                                        onUpdate={onUpdate}
                                        key={filteredBook.id}
                                    />
                                ))}
                            </ol>
                        )}
                        {error && (
                            <div>No search results.</div>
                        )}
                    </div>
                </div>
        )
    }
}

export default Search