import React from 'react'
import { Row } from 'react-bootstrap'
import EntradaCompras from './EntradaCompras'

class Compras extends React.Component {

  render() {
    if (this.props.compras !== undefined && this.props.compras.length > 0) {
      return (
        <Row>
          {this.props.compras.map((compra) => {
            return <EntradaCompras post={compra} />
          })}
        </Row>
      )
    }
    else {
      return <Row>
        <h3>Todavía no tenes compras</h3>
      </Row>
    }
  }
}

export default Compras