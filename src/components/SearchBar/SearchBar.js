import React from 'react'
import AsyncSelect from 'react-select/async'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FilterTags from '../DB connections/FilterTags'
import TagsPopulares from '../SearchBar/TagsPopulares'
import '../../styles/SearchBar.css'

class SearchBar extends React.Component {

  state = {
    inputValue: "",
    tags: ""

  };

  promiseOptions = (inputValue) => {
    return new Promise(async resolve => {
      var tags = []
      var tagArray = []

      if (inputValue.trim() !== "") {
        tags = await FilterTags(inputValue)
      }

      if (tags !== []) {
        tags.map((tag) => {
          const t = { value: tag.etiqueta, label: tag.etiqueta }
          return tagArray.push(t)
        })
      }

      return resolve(tagArray)
    })
  }

  handleChange = (tagslist) => {
    var tags = ""
    if (tagslist !== null) {
      tagslist.map((tag) => {
        if (tags === "") {
          return tags += tag.value
        }
        else {
          return tags += " " + tag.value
        }
      })
    }
    this.setState({ ...this.state, tags: tags })
  }

  render() {
    const path = '/search/'+this.state.tags
    return (
      <Row className="mr-auto">
        <Col xs={12} md={9}>
          <AsyncSelect
            isMulti cacheOptions defaultOptions loadOptions={this.promiseOptions} onChange={this.handleChange}
          />
        </Col>
        <Col xs={12} md={3}>
          <Link to={{ pathname: path, state: { ...this.state, tags: this.state.tags } }}
            className='btn btn-primary btn-block'>Buscar</Link>
        </Col>
        <Col xs={12} className="mt-1">
          <TagsPopulares />
        </Col>
      </Row>
    )
  }
}

export default SearchBar