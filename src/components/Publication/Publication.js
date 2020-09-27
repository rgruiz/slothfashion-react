import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import image from '../../img/header-1.jpg'
import Comment from './Comment';
import Style from '../../styles/Publication.css'

class Publication extends React.Component {


    render() {
        return (
            <Container fluid>
                <Row >
                    <Col xs = {8}>
                        <Row className = 'mb-3'>
                            <Col xs = {12} className = 'imgPubli'>
                                <img src = {image} className = 'imgPubli'/>
                            </Col>
                        </Row>
                        <Row className = 'mb-3'>
                            <Col>
                                Esta es la descripcion del producto.
                            </Col>
                        </Row>
                        <Row className = 'mb-5'><Col>#hola #test #ropa #moda #belleza #style #jean #camisa #HelloWorld</Col></Row>
                        <Row>
                            <Col>
                                <label>
                                    $4600
                                </label>
                            </Col>
                            <Col>
                                <Button>                                
                                    comprar
                                </Button>
                            </Col>                                                        
                        </Row>
                    </Col>
                    <Col xs = {4} >
                    <Comment />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Publication