import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Compras from './Compras';
import Publicaciones from './Publicaciones.js';
import Select from 'react-select'
import RecuperarCookie from '../Cookies/RecuperarCookie'
import GETHistorial from '../DB connections/GETHistorial'
import '../../styles/Publication.css'


class Historial extends React.Component {

    state = {
        ...this.state,
        filter: { value: 'compras', label: 'Ver Compras' },
    }

    handleChange = (value) => {
        this.setState({ ...this.state, filter: value })
    }

    async componentDidMount() {
        const cookie = RecuperarCookie()
        const historial = await GETHistorial(cookie)

        this.setState({ ...this.state, compras: historial.compras, publicaciones: historial.publicaciones })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} className="mt-2">
                        <Select
                            name="filtro"
                            options={[{ value: 'compras', label: 'Ver Compras' }, { value: 'publicaciones', label: 'Ver Publicaciones' }]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={this.handleChange}
                            value={this.state.filter}
                        />
                    </Col>
                    {this.state.filter.value === 'compras' &&
                        <Col xs={12} className='mt-1'>
                            <Compras compras={this.state.compras} />
                        </Col>
                    }
                    {this.state.filter.value === 'publicaciones' &&
                        <Col xs={12} className='mt-1'>
                            <Publicaciones publicaciones={this.state.publicaciones} />
                        </Col>
                    }
                </Row>
            </Container>
        )
    }
}

export default Historial