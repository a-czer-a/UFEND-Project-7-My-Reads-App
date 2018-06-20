import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookSelectButton from './BookSelectButton'
import LoadingIcon from './icons/loading-icon.gif'


class BookDetails extends Component {
    state = {
        bookDetails: {},
        isLoaded: false
    }

    componentDidMount() {
            const id = this.props.id
            BooksAPI.get(id).then((bookDetails) => {
                this.setState({
                    bookDetails: bookDetails,
                    isLoaded: true
                })
            })
    }

    render() {
        const {onUpdate} = this.props
        const bookDetails = this.state.bookDetails
        const isLoaded = this.state.isLoaded
        const id = bookDetails.id
        const title = bookDetails.title
        const shelf = bookDetails.shelf ? bookDetails.shelf : "None"
        const author = bookDetails.authors ? bookDetails.authors : []
        const cover = bookDetails.imageLinks ? bookDetails.imageLinks.thumbnail || bookDetails.imageLinks.smallThumbnail : null
        const subtitle = bookDetails.subtitle ? bookDetails.subtitle : null
        const averageRating = bookDetails.averageRating ? bookDetails.averageRating : "-"
        const language = bookDetails.language ? bookDetails.language : "-"
        const categories = bookDetails.categories ? bookDetails.categories : "-"
        const publisher = bookDetails.publisher ? bookDetails.publisher : "-"
        const publishedDate = bookDetails.publishedDate ? bookDetails.publishedDate : "-"
        const pageCount = bookDetails.pageCount ? bookDetails.pageCount : "-"
        const description = bookDetails.description ? bookDetails.description : "No description available"

        return (
            <div>
            {!isLoaded ? (
                <div className="loading-icon-container"><img src={LoadingIcon} alt="Loading icon"></img></div>
            ) : (
                <div className="book-details-container">
                    <Link className="close-details" to="/">Close</Link>
                    <div className="book-details">
                        <div className="book">
                            <div className="book-top">
                                <div 
                                    className="book-cover" 
                                    style={{backgroundImage: `url(${cover})` }}>
                                </div>
                                <BookSelectButton 
                                    onUpdate={onUpdate}
                                    filteredBook={bookDetails}
                                    shelf={shelf}
                                    key={id}
                                />
                            </div>
                        </div>
                        <div className="book-info">
                            {title && subtitle ? (
                                <div className="book-title-details">{title}. {subtitle}</div>
                            ) : (
                                <div className="book-title-details">{title}</div>
                            )}
                            {author.length > 1 ? (
                                <div className="book-authors">{author.join(', ')}</div>
                            ) : (
                                <div className="book-authors">{author}</div>
                            )}
                            <div className="book-publisher"><span className="rubric">Publisher:</span> {publisher}</div>
                            <div className="book-detail"><span className="rubric">Publish date:</span> {publishedDate}</div>
                            <div className="book-detail"><span className="rubric">Language:</span> {language}</div>
                            <div className="book-detail"><span className="rubric">Pages:</span> {pageCount}</div>
                            <div className="book-detail"><span className="rubric">Category:</span> {categories}</div>
                            <div className="book-detail"><span className="rubric">Average rating:</span> {averageRating}</div>
                        </div>
                        <div className="description-container">
                            <h3 className="details-header">Description</h3>
                            <div className="book-description">{description}</div>
                        </div>
                    </div>
                </div>
            )}
            </div>
        )
    }
}

export default BookDetails