import React, { Component } from 'react'
import BookSelectButton from './BookSelectButton'
import BookDetails from './BookDetails'
import { Link } from 'react-router-dom'


class Book extends Component {
    // state = {
    //     book: ''
    // }
    render() {
        const { books, filteredBook, onUpdate } = this.props

        // this.setState({
        //     book: filteredBook
        // })
        
        if (!filteredBook.authors) {
            filteredBook.authors = null
        }

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
                            filteredBook={ filteredBook }
                        />
                    </div>
                    {filteredBook.title && filteredBook.subtitle ? (
                        <div className="book-title">{filteredBook.title}. {filteredBook.subtitle}</div>
                    ) : (
                        <div className="book-title">{filteredBook.title}</div>
                    )}
                    {!filteredBook.authors && (
                        <div className="hidden"></div>
                    )}
                    {filteredBook.authors.length > 1 ? (
                        <div className="book-authors">{filteredBook.authors.join(', ')}</div>
                    ) : (
                        <div className="book-authors">{filteredBook.authors}</div>
                    )} : {
                        !filteredBook.authors 
                    }
                    
                </div>
            </li>
        )
    }
}

export default Book