import React, { Component } from 'react'

class BookSelectButton extends Component {
    render() {

        const { onUpdate, filteredBook } = this.props 

        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => onUpdate(filteredBook, event)} value={filteredBook.shelf}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
            </div>

        )
    }
}

export default BookSelectButton