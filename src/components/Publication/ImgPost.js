import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import DOMAIN from '../../constants/URL'

class ImgPost extends React.Component {

  state = {
    ...this.state,
    images: this.props.images,
  }

  componentDidMount() {
    if (this.props.images !== undefined) {

      const keys = Object.keys(this.props.images)

      this.setState({
        ...this.state,
        selected_image: <Image src={DOMAIN + this.props.images[keys[0]].imagen.slice(6,)}
          id={this.props.images[keys[0]].idimagen} rounded fluid />
      })
    }
  }

  changeImg(src, idimagen) {
    this.setState({...this.state, selected_image: <Image src={src}
    id={idimagen} rounded fluid />})
  }

  render() {
    return (
      <Row>
        <Row>
          <Col xs={12}>
            {this.state.selected_image}
          </Col>
        </Row>
        <Row>
          {this.state.images.map((image) =>
            <Col xs={3} className='mt-3'>
              <button className="thumbnail">
                <Image src={DOMAIN + image.imagen.slice(6,)} className="hover-zoom"
                  id={image.idimagen} rounded fluid thumbnail
                  onClick={() => {this.changeImg(DOMAIN + image.imagen.slice(6,), image.idimagen)}} />
              </button>
            </Col>
          )}
        </Row>
      </Row>
    )
  }
}

export default ImgPost