import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'


class Bookshelf extends Component {
    static propTypes = {
        filteredBooks: PropTypes.array.isRequired,
        onUpdate: PropTypes.func.isRequired,
        onBookDetailsUpdate: PropTypes.func.isRequired
    }

    render() {
        const { onUpdate, filteredBooks, onBookDetailsUpdate } = this.props
        return (
            <ol className="books-grid">
            {filteredBooks.map((filteredBook) => (
                < Book 
                filteredBook={filteredBook}
                key={filteredBook.id}
                onUpdate={onUpdate}
                onBookDetailsUpdate={onBookDetailsUpdate}
                />
            ))}
            </ol>

        )
    }
}

export default Bookshelf