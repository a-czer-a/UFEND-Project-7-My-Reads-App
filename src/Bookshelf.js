import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
    render() {
        const { books, onUpdate, filteredBooks, onBookDetailsUpdate, key } = this.props

        return (
            <ol className="books-grid" key={key}>
            {filteredBooks.map((filteredBook) => (
                < Book 
                filteredBook= {filteredBook}
                onUpdate={onUpdate}
                onBookDetailsUpdate={onBookDetailsUpdate}
                />
            ))}
            </ol>

        )
    }


}


export default Bookshelf