import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import header1 from '../../img/header-1.jpg'
import header2 from '../../img/header-2.jpg'
import header3 from '../../img/header-3.jpg'
import header4 from '../../img/header-4.jpg'
import header5 from '../../img/header-5.jpg'
import header6 from '../../img/header-6.jpg'
import header7 from '../../img/header-7.jpg'

const Slider = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={header1}
          alt="First asd"
        />
        {/*         <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={header2}
          alt="First slaaaide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={header3}
          alt="First fff"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={header4}
          alt="First fff"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={header5}
          alt="First fff"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={header6}
          alt="First fff"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={header7}
          alt="First fff"
        />

      </Carousel.Item>
    </Carousel >
  )
}

export default Slider