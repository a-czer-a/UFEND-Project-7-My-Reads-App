import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

class Books extends Component {

    render() {

        const { books, onUpdate, onBookDetailsUpdate } = this.props
        const shelves = [
            {type: 'currentlyReading', title: 'Currently Reading'},
            {type: 'wantToRead', title: 'Want to Read'},
            {type: 'read', title: 'Read'}
        ]
    
        return (
            <div className="list-books-content">
            {shelves.map((shelf) => {
                const filteredBooks = books.filter(book => book.shelf === shelf.type)
                    return (
                        <div>
                            <div className="bookshelf" key={ shelf.type }>
                            <h2 className="bookshelf-title">{ shelf.title }</h2>
                                <div className="bookshelf-books">
                                    < Bookshelf 
                                        books={ books }
                                        filteredBooks = { filteredBooks }
                                        onUpdate={ onUpdate }
                                        key={shelf.type}
                                        onBookDetailsUpdate={onBookDetailsUpdate}
                                        />
                                </div>
                            </div>
                        </div>
                    )
            })}
            </div>
        )
    }
}

export default Books