import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookSelectButton from './BookSelectButton'


class BookDetails extends Component {
    
    render() {
        
        const { bookForDetails, onUpdate, getBook } = this.props
        const author = bookForDetails.authors ? bookForDetails.authors : []
        const cover = bookForDetails.imageLinks ? bookForDetails.imageLinks.thumbnail || bookForDetails.imageLinks.smallThumbnail : null
        const subtitle = bookForDetails.subtitle ? bookForDetails.subtitle : null
        // const { id } = {this.props.match.params.id}
        
        return (
            <div>
                <div className="book-details-container">
                    <Link className="close-details" to="/">Close</Link>
                    <div className="book-details">
                        <div className="book">
                        <div className="book-top">
                            <div 
                                className="book-cover" 
                                style={{backgroundImage: `url(${cover})` }}>
                            </div>
                            < BookSelectButton 
                                onUpdate={ onUpdate }
                                filteredBook={ bookForDetails }
                            />
                        </div>
                        {bookForDetails.title && bookForDetails.subtitle ? (
                            <div className="book-title">{bookForDetails.title}. {subtitle}</div>
                        ) : (
                            <div className="book-title">{bookForDetails.title}</div>
                        )}
                        {author.length > 1 ? (
                            <div className="book-authors">{author.join(', ')}</div>
                        ) : (
                            <div className="book-authors">{author}</div>
                        )}
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default BookDetails