import React from 'react'
import AsyncSelect from 'react-select/async'
import FilterTags from '../DB connections/FilterTags'

class SearchBar extends React.Component {

  state = {
    inputValue: "",

  };

  promiseOptions = (inputValue) => {
    return new Promise(async resolve => {
      var tags = []
      var tagArray = []
      if (inputValue !== "") {
        tags = await FilterTags(inputValue)
      }
      else {
        tags = [{ value: 'red', label: 'red' }]
      }

      tags.map((tag) => {
        const t = { value: tag.etiqueta, label: tag.etiqueta }
        tagArray.push(t)
      })

      return resolve(tagArray)
    })
  }

  handleChange = (selected) => {
    this.setState({ ...this.state, tags: selected })
    this.props.onTagsChange(selected)
  }

  render() {
    return (
      <div>
        <AsyncSelect
          isMulti cacheOptions defaultOptions loadOptions={this.promiseOptions} onChange={this.handleChange}
        />
      </div>

    )
  }
}

export default SearchBar