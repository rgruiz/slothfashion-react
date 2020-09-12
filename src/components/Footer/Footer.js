import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RedesSociales from './RSociales'
import '../../styles/footer.css'

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row className='align-items-center pt-2'>
        <Col className='text-muted ml-2' xs={3}>
          Cocineritos design - 2020
        </Col>
        <Col className='text-right' xs={8}>
          <RedesSociales />
        </Col>
      </Row>
    </Container>

  )

}

export default Footer