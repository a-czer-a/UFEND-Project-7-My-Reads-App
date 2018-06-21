import React from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'


const Books = (props) => {
        
    const {books, onUpdate} = props
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
                    <div key={shelf.type}>
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">{shelf.title} <span className="number">({booksOnShelf})</span></h2>
                            <div className="bookshelf-books">
                                <Bookshelf 
                                    filteredBooks={filteredBooks}
                                    onUpdate={onUpdate}
                                />
                            </div>
                        </div>
                    </div>
                )
        })}
        </div>
    )
}

Books.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
}


export default Books