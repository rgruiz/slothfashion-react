import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Compras from './Compras';
import Publicaciones from './Publicaciones.js';
import image from '../../img/header-1.jpg'
import Style from '../../styles/Publication.css'
import Select from 'react-select'



class Historial extends React.Component {
    render() {
        return (
            <Container>
                    <Row>
                        <Col xs={12}>
                            <Select
                                name="filtro"
                                options={[{ value: 'compras', label: 'Ver Compras' }, { value: 'publicaciones', label: 'Ver Publicaciones' }]}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                        </Col>
                        <Col xs={12}>
                            <Compras />
                        </Col>
                        <Col xs={12}>
                            <Publicaciones />
                        </Col>
                    </Row>
            </Container>
        )
    }
}

export default Historial