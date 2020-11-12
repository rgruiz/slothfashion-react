import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormatDate from '../utils/FormatDate'
import DisplayTags from '../DisplayTags/DisplayTags'
import EncryptData from '../utils/EncryptData'
import { URL_AWSFILES } from '../../constants/URL'
import '../../styles/Thumbs.css'

class PostThumb extends React.Component {

  state = {
    postId: ""
  }

  render() {
    //encripta el id de la publicacion que se vera en la URL
    const postId = EncryptData(this.props.data.idpublicacion)
    const path = "/publication/"+postId

    return (
      <Col className="fondo-thumb gradient-border">
        <Link
          to={{
            pathname: path
          }}>
          <Button className="btn btn-block botonthumb" variant="light">
            <Image src={URL_AWSFILES + this.props.data.imagen} className="thumb mt-3" crossorigin='anonymous'
            id={this.props.data.idpublicacion}></Image>
            <Row className="text-right text-muted">
              <Col xs={12} className="timestamp">
                {FormatDate(this.props.data.fechaposteo)}
              </Col>
              <Col xs={12}>
                ${this.props.data.precio}
              </Col>
              <Col xs={12}>
                {this.props.data.descripcion}
              </Col>
              <Col>
                <DisplayTags tags={this.props.data.tags} />
              </Col>
            </Row>
          </Button>
        </Link >
      </Col>
    )
  }
}

export default PostThumb