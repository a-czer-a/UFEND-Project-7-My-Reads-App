import React, { Component } from 'react'
import BookSelectButton from './BookSelectButton'

class Book extends Component {
    render() {
        const { books, book, updateShelf } = this.props
        console.log(books)

        return (
                <li>
                <div className="book">
                    <div className="book-top">
                        <div 
                            className="book-cover" 
                            style={{backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                        </div>
                        < BookSelectButton 
                            onChange={updateShelf}
                            />
                    </div>
                    {book.title && book.subtitle ? (
                        <div className="book-title">{book.title}. {book.subtitle}</div>
                    ) : (
                        <div className="book-title">{book.title}</div>
                    )}
                    {book.authors.length > 1 ? (
                        <div className="book-authors">{book.authors.join(', ')}</div>
                    ) : (
                        <div className="book-authors">{book.authors}</div>
                    )}
                </div>
            </li>
        )
    }
}

export default Book