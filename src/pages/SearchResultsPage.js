import React from 'react'
import SearchResults from '../components/SearchResults/SearchResults'

class SearchResultsPage extends React.Component {

  render() {
    return (
        <SearchResults tags={this.props.location.state.tags}/>
    )
  }
  
}

export default SearchResultsPage