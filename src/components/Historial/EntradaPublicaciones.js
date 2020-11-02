import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { URL_AWSFILES } from '../../constants/URL'
import FormatDate from '../utils/FormatDate'
import '../../styles/historial.css'

class EntradaPublicaciones extends React.Component {


  pepe = {
    "poster": 1,
    "imagen": "138-file2.jpeg",
    "fechatransaccion": null,
    "nombreCont": null,
    "apellidoCont": null,
    "mailCont": null,
    "telefonoCont": null
  }

  render() {
    return (
      <Col xs={12} className='ml-0 mr-0 pr-0 pl-0 mt-2 link-container'>
        <Link
          className='link-to-post'
          to={{
            pathname: "/publication",
            state: { postId: this.props.post.idpublicacion }
          }}>
          <Row id={this.props.post.idpublicacion}>
            <Col xs={2}>
              <Image src={URL_AWSFILES + this.props.post.imagen}
                className="thumb-historial" id={this.props.post.imagen} />
            </Col>
            <Col xs={9}>
              <Row>
                <Col xs={6}>
                  <Row>
                    <Col xs={12}>
                      <h5>Descripción</h5>
                    </Col>
                    <Col xs={12}>
                      Fecha posteo: {FormatDate(this.props.post.fechaposteo)}
                    </Col>
                    <Col xs={12}>
                      {this.props.post.descripcion}
                    </Col>
                    <Col xs={12}>
                      $ {this.props.post.precio}
                    </Col>
                  </Row>
                </Col>
                {this.props.post.fechatransaccion !== null &&
                  <Col xs={6} id={this.props.post.poster}>
                    <Row>
                      <Col xs={12}>
                        <h5>Datos del comprador</h5>
                      </Col>
                      <Col xs={12}>
                        {this.props.post.nombreCont} {this.props.post.apellidoCont}
                      </Col>
                      <Col xs={12}>
                        {this.props.post.mailCont}
                      </Col>
                      <Col xs={12}>
                        {this.props.post.telefonoCont}
                      </Col>
                      <Col xs={12}>
                        Fecha compra: {FormatDate(this.props.post.fechatransaccion)}
                      </Col>
                    </Row>
                  </Col>
                }
              </Row>
            </Col>
          </Row>
        </Link>
      </Col>
    )
  }
}

export default EntradaPublicaciones