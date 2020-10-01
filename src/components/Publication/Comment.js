import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import { Avatar } from 'rsuite'

const Comment = props => {

  console.log(props.comments)

  return (
    <>
      <Col>
        <h3 className='justify-content-center'>Comentarios</h3>
      </Col>
      <Table striped bordered hover className='comment'>
        <tbody>
          {props.comments.map((comment) => <tr>
            <td><Row>
              <Col>
                <Row className="d-flex align-items-center text-muted">
                  <Col>
                    <Avatar style={{ background: '#7B1FA2' }}>{comment.nombre.slice(0, 2)}</Avatar> {comment.nombre}
                  </Col>
                </Row>
              </Col>
              <Col className="d-flex align-items-center text-muted"> {comment.fechacomentario} </Col>
            </Row>
              <Row>
                <Col className="comment-text mt-2">
                  {comment.comentario}
                </Col>
              </Row>
            </td>
          </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}

export default Comment