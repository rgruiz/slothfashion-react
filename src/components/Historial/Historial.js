import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
/*import Publication from '../Publication/Publication';*/

class Historial extends React.Component {
    render() {
        return(
            <Container>
                <Row xs={12}>
                    historial
                </Row>
                <Row xs={12}>
                    <col>Publicacion</col>
                    <col>Compras</col>
                </Row>
                <Row>
                    {/* <Publicacion/> */}
                </Row>
            </Container>
        )
    }
}

export default Historial