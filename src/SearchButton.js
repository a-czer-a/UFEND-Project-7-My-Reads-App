import React from 'react'
import {Link} from 'react-router-dom'

const SearchButton = () => {
    return (
        <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
    )   
}

export default SearchButton