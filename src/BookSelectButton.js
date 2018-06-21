import React from 'react'
import PropTypes from 'prop-types'

const BookSelectButton = (props) => {

    const {onUpdate, filteredBook, shelf} = props
    const value = shelf ? shelf : 'none'

    return (
        <div className="book-shelf-changer">
            <select onChange={(event) => {onUpdate(filteredBook, event.target.value)}}
                    value={value}>
                <option value="moveTo" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

BookSelectButton.propTypes = {
    filteredBook: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    shelf: PropTypes.string
}

export default BookSelectButton