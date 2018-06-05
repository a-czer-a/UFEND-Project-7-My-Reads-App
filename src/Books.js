import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

class Books extends Component {
    render() {

        const { books, onUpdate } = this.props
        const shelves = [
            {type: 'currentlyReading', id: 'Currently Reading'},
            {type: 'wantToRead', id: 'Want to Read'},
            {type: 'read', id: 'Read'}
        ]
    
        return (
            <div className="list-books-content">
            {shelves.map((shelf) => {
                const filteredBooks = books.filter(book => book.shelf === shelf.type)
                    return (
                        <div>
                            <div className="bookshelf" key={ shelf.type }>
                            <h2 className="bookshelf-title">{ shelf.id }</h2>
                                <div className="bookshelf-books">
                                    < Bookshelf 
                                        books={ books }
                                        shelves={shelves}
                                        filteredBooks = { filteredBooks }
                                        onUpdate={ onUpdate }
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