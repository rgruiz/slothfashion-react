import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { URL_AWSFILES } from '../../constants/URL'
import FormatDate from '../utils/FormatDate'
import '../../styles/historial.css'

class EntradaCompras extends React.Component {

  render() {
    return (
      <Col xs={12} className='ml-0 mr-0 pr-0 pl-0 mt-2 link-container'>
        <Link
          className='link-to-post'
          to={{
            pathname: "/publication",
            state: { postId: this.props.post.publicacion }
          }}>
          <Row id={this.props.post.idhistorial}>
            <Col xs={2}>
              <Image src={URL_AWSFILES + this.props.post.imagen} className="thumb-historial" id={this.props.post.publicacion} />
            </Col>
            <Col xs={9}>
              <Row>
                <Col xs={6}>
                  <Row>
                    <Col xs={12}>
                      <h5>Descripción</h5>
                    </Col>
                    <Col xs={12}>
                      Fecha compra: {FormatDate(this.props.post.fechatransaccion)}
                    </Col>
                    <Col xs={12}>
                      {this.props.post.descripcion}
                    </Col>
                    <Col xs={12}>
                      $ {this.props.post.precio}
                    </Col>
                  </Row>
                </Col>
                <Col xs={6} id={this.props.post.poster}>
                  <Row>
                    <Col xs={12}>
                      <h5>Datos del vendedor</h5>
                    </Col>
                    <Col xs={12}>
                      {this.props.post.nombre} {this.props.post.apellido}
                    </Col>
                    <Col xs={12}>
                      {this.props.post.mail}
                    </Col>
                    <Col xs={12}>
                      {this.props.post.telefono}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Link>
      </Col>
    )
  }
}

export default EntradaCompras