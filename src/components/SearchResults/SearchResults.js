import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import PostThumbContainer from '../PostThumb/PostThumbContainer'

class SearchResults extends React.Component {

  state = {
    ...this.state,
    orderedby: "DESC",
    filter: "fechaposteo",
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <PostThumbContainer orderedby={this.state.orderedby} filter={this.state.filter} tags={this.props.tags} />
          </Row>
        </Container>
      </>
    )
  }
}

export default SearchResults