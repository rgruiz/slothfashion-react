import React from 'react'
import Slider from './Slider'
import { Container, Col, Row } from 'react-bootstrap'
import SearchBar from '../SearchBar/SearchBar'
import TagsPopulares from '../SearchBar/TagsPopulares'
import PostThumbContainer from '../PostThumb/PostThumbContainer'

class Home extends React.Component {

  state = {
    ...this.state,
    orderedby: "DESC",
    filter: "fechaposteo",
    tags: ""
  }

  onTagsChange = (tagslist) => {
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
  }

  render() {
    return (
      <>
        <Slider />
        <Container fluid>
          <Row>
            <Col xs={12} sm={8} className='mt-3'>
              <SearchBar onTagsChange={this.onTagsChange} />
            </Col>
            <Col xs={12} className='mt-2'>
              <TagsPopulares />
            </Col>
          </Row>
          <Row>
            <PostThumbContainer orderedby={this.state.orderedby} filter={this.state.filter} tags={this.state.tags} />
          </Row>
        </Container>
      </>
    )
  }
}

export default Home