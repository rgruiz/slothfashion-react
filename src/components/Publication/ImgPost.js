import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { URL_AWSFILES } from '../../constants/URL'
import '../../styles/Publication.css'

class ImgPost extends React.Component {

  state = {
    ...this.state,
    images: this.props.images,
  }

  componentDidMount() {
    if (this.props.images !== undefined && this.props.images.length > 0 ) {

      const keys = Object.keys(this.props.images)

      this.setState({
        ...this.state,
        selected_image: <Image src={URL_AWSFILES + this.props.images[keys[0]].imagen} crossorigin='anonymous'
          id={this.props.images[keys[0]].idimagen} rounded fluid className='img-max-height'/>
      })
    }
  }

  changeImg(src, idimagen) {
    this.setState({...this.state, selected_image: <Image src={src}
    id={idimagen} rounded fluid className='img-max-height'/>})
  }

  render() {
    return (
      <Container>
      <Row>
        <Row>
          <Col xs={12}>
            {this.state.selected_image}
          </Col>
        </Row>
        <Row>
          {this.state.images.map((image) =>
            <Col xs={3} className='mt-3'>
              <button className="no-background">
                <Image src={URL_AWSFILES + image.imagen} className="thumbnail hover-zoom" crossorigin='anonymous'
                  id={image.idimagen} rounded fluid thumbnail
                  onClick={() => {this.changeImg(URL_AWSFILES + image.imagen, image.idimagen)}} />
              </button>
            </Col>
          )}
        </Row>
      </Row>
      </Container>
    )
  }
}

export default ImgPost