import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import PostThumb from './PostThumb'

class PostThumbHome extends React.Component {

  state = {
    ...this.state,
    posts: this.props.post,
    error: "No hay resultados. Por favor realizá una búsqueda y eligiendo la etiqueta deseada de la lista."
  }


  render() {
    if (this.state.posts !== "" && this.state.posts) {
      return (
        <>
          <Container fluid>
            <Row>
              {this.state.posts.map((post) => {
                return (<Col xs={12} sm={6} lg={4} xl={3}>
                  <PostThumb data={post} />
                </Col>)
              })}
            </Row>            
          </Container>
        </>
      )
    }
    else {
      return (
        <Container fluid>
          <Row>
            <Col className="mt-3">
              {this.state.error}
            </Col>
          </Row>
        </Container>
      )
    }
  }
}

export default PostThumbHome