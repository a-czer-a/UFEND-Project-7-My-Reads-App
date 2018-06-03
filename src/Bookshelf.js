import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
    render() {
        const { books } = this.props

        return (
            <ol className="books-grid">
            {books.map((book) => (
                < Book 
                book= {books}
                key= {book.id}
                />
            ))}
            </ol>
        )
    }
}


export default Bookshelf