import React from 'react'
import Select from 'react-select'

class SearchBar extends React.Component {
  render() {
    return (
      <Select
        isMulti
        name="colors"
        options={[{ value: 'red', label: 'red' },{ value: 'blanco', label: 'blanco' }]}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    )
  }
}

export default SearchBar