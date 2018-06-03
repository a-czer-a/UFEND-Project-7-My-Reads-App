import React, { Component } from 'react'
import BookSelect from './BookSelect'

class Book extends Component {

    render() {
        const { bookCoverImg, bookTitle, bookAuthor } = this.props

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div 
                            className="book-cover" 
                            style={{ width: 128, height: 188, backgroundImage: 'url(${bookCoverImg})' }}>
                        </div>
                        < BookSelect />
                    </div>
                    <div className="book-title">{bookTitle}</div>
                    <div className="book-authors">{bookAuthor}</div>
                </div>
            </li>
        )
    }
}

export default Book