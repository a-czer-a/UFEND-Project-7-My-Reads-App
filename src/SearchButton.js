import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchButton extends Component {
render() {

    return (
        <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
    )   
    }
}

export default SearchButton