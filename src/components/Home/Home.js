import React from 'react'
import Slider from './Slider'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import SearchBar from '../SearchBar/SearchBar'
import TagsPopulares from '../SearchBar/TagsPopulares'
import GETMercadoPagoLink from '../DB connections/GETMercadoPagoLink'

class Home extends React.Component {


  //esto se usa para cargar el boton pagar con los datos de la compra. el boton dice PAGAR por defecto.........
/*     async componentDidMount() {

    const idPost = {idPost: 1}

    const datapreferenceid = await GETMercadoPagoLink(idPost)

    var script = document.createElement('a')
    var linkText = document.createTextNode("Pagar")
    script.appendChild(linkText)
    script.title = "Pagar"
    script.href = datapreferenceid
    document.body.appendChild(script)
    this.div.appendChild(script);
  }  
 */
  render() {
    return (
      <>
        <Slider />
        <Container fluid>
          <Row>
            <Col xs={6} className='mt-3'>
              <SearchBar />
            </Col>
{/*             <Col xs={6}>
              <TagsPopulares />
            </Col> */}
          </Row>
{/*           <Row>
            <Button ref={el => (this.div = el)} className="boton-pago"></Button>
          </Row> */}
        </Container>
      </>
    )
  }
}

export default Home