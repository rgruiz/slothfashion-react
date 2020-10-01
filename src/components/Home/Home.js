import React from 'react'
import Slider from './Slider'
import { Container, Col, Row } from 'react-bootstrap'
import SearchBar from '../SearchBar/SearchBar'
import TagsPopulares from '../SearchBar/TagsPopulares'

class Home extends React.Component {

  render() {
    return (
      <>
        <Slider />
        <Container fluid>
          <Row>
            <Col xs={6} className='mt-3'>
              <SearchBar />
            </Col>
            <Col xs={6}>
              <TagsPopulares />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Home