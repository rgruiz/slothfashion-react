import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormatDate from '../utils/FormatDate'
import DisplayTags from '../DisplayTags/DisplayTags'
import { DOMAIN } from '../../constants/URL'
import '../../styles/Thumbs.css'

class PostThumb extends React.Component {

  state = {
    postId: ""
  }

  render() {
    return (
      <Link
        to={{
          pathname: "/publication",
          state: { postId: this.props.data.idpublicacion }
        }}>
        <Button className="btn btn-block botonthumb" variant="light">
          <Image src={DOMAIN + this.props.data.imagen.slice(6,)} className="thumb mt-3" id={this.props.data.idpublicacion}></Image>
          <Row className="text-right text-muted">
            <Col xs={12}>
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

    )
  }
}

export default PostThumb