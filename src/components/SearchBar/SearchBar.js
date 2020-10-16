import React from 'react'
import AsyncSelect from 'react-select/async'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FilterTags from '../DB connections/FilterTags'
import TagsPopulares from '../SearchBar/TagsPopulares'
import '../../styles/SearchBar.css'

class SearchBar extends React.Component {

  state = {
    inputValue: "",

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
          tagArray.push(t)
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
          tags += tag.value
        }
        else {
          tags += " " + tag.value
        }
      })
    }
    this.setState({ ...this.state, tags: tags })
    this.setState({ ...this.state, tags: tags })
  }

  render() {
    return (
      <Row className="width-100">
        <Col xs={10}>
          <AsyncSelect
            isMulti cacheOptions defaultOptions loadOptions={this.promiseOptions} onChange={this.handleChange}
          />
        </Col>
        <Col xs={2}>
          <Link to={{ pathname: '/search', state: { ...this.state, tags: this.state.tags } }}
            className='btn btn-primary'>Buscar</Link>
        </Col>
        <Col xs={12} className="mt-1">
          <TagsPopulares />
        </Col>
      </Row>

    )
  }
}

export default SearchBar