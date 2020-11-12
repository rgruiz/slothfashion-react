import React from 'react'
import { Row, Col } from 'react-bootstrap'
import EntradaPublicaciones from './EntradaPublicaciones'

class Publicaciones extends React.Component {

  render() {
    if (this.props.publicaciones !== undefined && this.props.publicaciones.length > 0) {
      return (
        <Row>
          {this.props.publicaciones.map((publicacion) => {
            return <EntradaPublicaciones post={publicacion} />
          })}
        </Row>
      )
    }
    else {
      return <Row>
        <Col>
          <h3>Todavía no tenes publicaciones</h3>
        </Col>
      </Row>
    }
  }
}

export default Publicaciones