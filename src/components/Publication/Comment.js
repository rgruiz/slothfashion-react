import React from 'react';
import { Row, Table } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

class Comment extends React.Component {

  render() {
    return (
      <Row>
        <h3 className = 'justify-content-center'>Comentarios</h3>
          <Table striped bordered hover  className = 'comment'>
            <tbody>
              <tr>
                <td>Comentario</td>
              </tr>
              <tr>
                <td>Comentario</td>
              </tr>
                <tr>
                <td>Comentario</td>
              </tr>
                <tr>
                <td>Comentario</td>
              </tr>
                <tr>
                <td>Comentario</td>
              </tr>
                <tr>
                <td>Comentario</td>
              </tr>
            </tbody>
          </Table>
      </Row>
    )
  }
}

export default Comment