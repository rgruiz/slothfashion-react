import React from 'react';
import { Row, Table } from 'react-bootstrap';

class Compras extends React.Component {

  render() {
    return (
      <Row>
        <h3 className = 'justify-content-center'>Compras</h3>
          <Table striped bordered hover  className = 'comment'>
            <tbody>
              <tr>
                <td>Compras</td>
              </tr>
              <tr>
                <td>Compras</td>
              </tr>
                <tr>
                <td>Compras</td>
              </tr>
                <tr>
                <td>Compras</td>
              </tr>
                <tr>
                <td>Compras</td>
              </tr>
                <tr>
                <td>Compras</td>
              </tr>
            </tbody>
          </Table>
      </Row>
    )
  }
}

export default Compras