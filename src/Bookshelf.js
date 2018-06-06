import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
    render() {
        const { books, onUpdate, filteredBooks } = this.props

        return (
            <ol className="books-grid">
            {filteredBooks.map((filteredBook) => (
                < Book 
                books= {books}
                filteredBook= {filteredBook}
                onUpdate={onUpdate}
                />
            ))}
            </ol>
        )
    }
}


export default Bookshelf