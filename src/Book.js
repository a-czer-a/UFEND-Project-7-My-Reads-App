import React, { Component } from 'react'
import BookSelectButton from './BookSelectButton'

class Book extends Component {
    render() {
        const { books, filteredBook, onUpdate } = this.props
        console.log(books)

        return (
                <li key={filteredBook.id}>
                <div className="book">
                    <div className="book-top">
                        <div 
                            className="book-cover" 
                            style={{backgroundImage: `url(${filteredBook.imageLinks.thumbnail})` }}>
                        </div>
                        < BookSelectButton 
                            onUpdate={ onUpdate }
                            filteredBook={filteredBook}
                        />
                    </div>
                    {filteredBook.title && filteredBook.subtitle ? (
                        <div className="book-title">{filteredBook.title}. {filteredBook.subtitle}</div>
                    ) : (
                        <div className="book-title">{filteredBook.title}</div>
                    )}
                    {filteredBook.authors.length > 1 ? (
                        <div className="book-authors">{filteredBook.authors.join(', ')}</div>
                    ) : (
                        <div className="book-authors">{filteredBook.authors}</div>
                    )}
                </div>
            </li>
        )
    }
}

export default Book