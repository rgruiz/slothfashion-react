import React from 'react'
import Slider from './Slider'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import SearchBar from '../SearchBar/SearchBar'
import TagsPopulares from '../SearchBar/TagsPopulares'
/* import POSTMercadoPago from '../DB connections/POSTMercadoPago' */

class Home extends React.Component {


  //esto se usa para cargar el boton pagar con los datos de la compra. el boton dice PAGAR por defecto.........
/*    async componentDidMount() {
    const datapreferenceid = await POSTMercadoPago()

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttribute('data-preference-id', datapreferenceid)
    script.setAttribute('textContent', '170578376-572012f4-6b2f-4438-a83e-7ff6d43f9b52')

    this.div.appendChild(script);

  }  */

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
          <Row 
          //     ref={el => (this.div = el)}
          >
          </Row>
        </Container>
      </>
    )
  }
}

export default Home