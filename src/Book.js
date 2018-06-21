import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import BookSelectButton from './BookSelectButton'

const Book = (props) => {
    const {filteredBook, onUpdate} = props
    const author = filteredBook.authors ? filteredBook.authors : []
    const cover = filteredBook.imageLinks ? filteredBook.imageLinks.thumbnail || filteredBook.imageLinks.smallThumbnail : null
    const subtitle = filteredBook.subtitle ? filteredBook.subtitle : null
    const {title, id, shelf} = filteredBook

    return (
        <li key={id}>
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{backgroundImage: `url(${cover})` }}>
                    </div>
                    <BookSelectButton 
                        onUpdate={onUpdate}
                        filteredBook={filteredBook}
                        shelf={shelf}
                        key={id}
                    />
                </div>
                {title && subtitle ? (
                    <div className="book-title">{title}. {subtitle}</div>
                ) : (
                    <div className="book-title">{title}</div>
                )}
                {author.length > 1 ? (
                    <div className="book-authors">{author.join(', ')}</div>
                ) : (
                    <div className="book-authors">{author}</div>
                )}
                <Link to={`/details/${id}`}>
                    <button className="book-details-button">Details</button>
                </Link>
            </div>
        </li>
    )
}

Book.propTypes = {
    filteredBook: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
}

export default Book