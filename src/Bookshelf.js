import React from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import Book from './Book'


const Bookshelf = (props) => {

    const {onUpdate, filteredBooks} = props
    filteredBooks.sort(sortBy('title'))

    return (
        <ol className="books-grid">
        {filteredBooks.map((filteredBook) => (
            <Book 
                filteredBook={filteredBook}
                key={filteredBook.id}
                onUpdate={onUpdate}
            />
        ))}
        </ol>
    )
}

Bookshelf.propTypes = {
    filteredBooks: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
}


export default Bookshelf