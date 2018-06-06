import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class BookDetails extends Component {

    // componentDidMount() {
    //     const book = this.props.location.state
    // }

    render() {
        // const { books, filteredBook, author, cover, title, subtitle, description, publisher, publishedDate, rating } = this.props
        // books.map((book) => {
        //     book.authors = {author}
        //     book.cover = {cover}
        //     book.title = {title}
        //     book.subtitle = {subtitle}
        // })

        return (
            <div className="book-details-container">
                <Link className="close-details" to="/">Close</Link>
                <div className="book-details"></div>
            </div>
        )
    }
}

export default BookDetails