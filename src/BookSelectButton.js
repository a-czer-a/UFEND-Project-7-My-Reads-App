import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookSelectButton extends Component {
    static propTypes = {
        filteredBook: PropTypes.object.isRequired,
        onUpdate: PropTypes.func.isRequired,
        shelf: PropTypes.string,
    }

    render() {

        const {onUpdate, filteredBook, shelf} = this.props
        const value = shelf ? shelf : 'none'

        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => {
                    onUpdate(filteredBook, event.target.value)
                }} value={value}>
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