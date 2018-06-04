import React, { Component } from 'react'

class BookSelectButton extends Component {
    render() {

        const { updateShelf } = this.props
        
        return (
            <div className="book-shelf-changer">
                <select onChange={updateShelf}>
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