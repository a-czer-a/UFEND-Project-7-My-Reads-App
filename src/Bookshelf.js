import React, {Component} from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import Book from './Book'


class Bookshelf extends Component {
    static propTypes = {
        filteredBooks: PropTypes.array.isRequired,
        onUpdate: PropTypes.func.isRequired
    }

    render() {
        const {onUpdate, filteredBooks} = this.props
        filteredBooks.sort(sortBy('title'))

        return (
            <ol className="books-grid">
            {filteredBooks.map((filteredBook) => (
                <Book 
                filteredBook={filteredBook}
                key={filteredBook.id}
                onUpdate={onUpdate}
                />
            ))}
            </ol>

        )
    }
}

export default Bookshelf