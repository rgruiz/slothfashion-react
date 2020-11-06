import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { URL_AWSFILES } from '../../constants/URL'
import FormatDate from '../utils/FormatDate'
import EncryptData from '../utils/EncryptData'
import '../../styles/historial.css'

class EntradaCompras extends React.Component {

  render() {
    //encripta el id de la publicacion que se vera en la URL
    const postId = EncryptData(this.props.post.publicacion)
    const path = "/publication/"+postId

    return (
      <Col xs={12} className='mt-2 link-container mb-1'>
        <Link
          className='link-to-post'
          to={{
            pathname: path
          }}>
          <Row id={this.props.post.idhistorial}>
            <Col xs={12} sm={5} md={3}>
              <Image src={URL_AWSFILES + this.props.post.imagen} className="thumb-historial" crossorigin='anonymous'
              id={this.props.post.publicacion} />
            </Col>
            <Col xs={12} sm={7} md={9}>
              <Row>
                <Col xs={12} md={6}>
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
                <Col xs={12} md={6} id={this.props.post.poster}>
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