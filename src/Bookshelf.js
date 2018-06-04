import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
    render() {
        const { books, updateShelf } = this.props

        return (
            <ol className="books-grid">
            {books.map((book) => (
                < Book 
                books= {books}
                book= {book}
                key= {book.id}
                shelfType= {book.shelf}
                onChange={updateShelf}
                />
            ))}
            </ol>
        )
    }
}


export default Bookshelf