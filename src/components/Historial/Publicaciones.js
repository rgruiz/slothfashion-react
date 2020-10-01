import React from 'react';
import { Row, Table } from 'react-bootstrap';

class Publicaciones extends React.Component {

  render() {
    return (
      <Row>
        <h3 className = 'justify-content-center'>Publicaciones</h3>
          <Table striped bordered hover  className = 'comment'>
            <tbody>
              <tr>
                <td>Publicacion</td>
              </tr>
              <tr>
                <td>Publicacion</td>
              </tr>
                <tr>
                <td>Publicacion</td>
              </tr>
                <tr>
                <td>Publicacion</td>
              </tr>
                <tr>
                <td>Publicacion</td>
              </tr>
                <tr>
                <td>Publicacion</td>
              </tr>
            </tbody>
          </Table>
      </Row>
    )
  }
}

export default Publicaciones