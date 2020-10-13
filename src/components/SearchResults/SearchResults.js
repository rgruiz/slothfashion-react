import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import TagsPopulares from '../SearchBar/TagsPopulares'
import PostThumbContainer from '../PostThumb/PostThumbContainer'

class SearchResults extends React.Component {

  state = {
    ...this.state,
    orderedby: "DESC",
    filter: "fechaposteo",
  }

  render() {
    console.log(this.state)
    return (
      <>
        <Container fluid>
          <Row>
            <Col xs={12} className='mt-2'>
              <TagsPopulares />
            </Col>
          </Row>
          <Row>
            <PostThumbContainer orderedby={this.state.orderedby} filter={this.state.filter} tags={this.props.tags} />
          </Row>
        </Container>
      </>
    )
  }
}

export default SearchResults