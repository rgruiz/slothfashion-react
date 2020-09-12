import React from 'react';
import Slider from './Slider'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import SearchBar from '../SearchBar/SearchBar';
import TagsPopulares from '../SearchBar/TagsPopulares';

class Home extends React.Component {


  render() {
    return (
      <>
        <Slider />
        <Container fluid>
          <Row>
            <Col xs={6}>
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