import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'


class Books extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdate: PropTypes.func.isRequired,
        onBookDetailsUpdate: PropTypes.func.isRequired
    }
    
    render() {

        const { books, onUpdate, onBookDetailsUpdate } = this.props
        const shelves = [
            {type: 'currentlyReading', title: 'Currently Reading'},
            {type: 'wantToRead', title: 'Want to Read'},
            {type: 'read', title: 'Read'}
        ]
    
        return (
            <div className="list-books-content">
            {shelves.map((shelf) => {
                const filteredBooks = books.filter(book => book.shelf === shelf.type)
                const booksOnShelf = filteredBooks.length
                    return (
                        <div>
                            <div className="bookshelf" key={ shelf.type }>
                            <h2 className="bookshelf-title">{ shelf.title } <span className="number">({booksOnShelf})</span></h2>
                                <div className="bookshelf-books">
                                    < Bookshelf 
                                        filteredBooks = { filteredBooks }
                                        onUpdate={ onUpdate }
                                        onBookDetailsUpdate={onBookDetailsUpdate}
                                        />
                                </div>
                            </div>
                        </div>
                    )
            })}
            </div>
        )
    }
}

export default Books