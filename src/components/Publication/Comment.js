import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import FormatDate from '../utils/FormatDate'
import { Avatar } from 'rsuite'

const Comment = props => {
  return (
    <>
      {props.comments.length !== 0 &&
        <Table striped bordered hover className='comment'>
          <tbody>
            {props.comments.map((comment) => <tr>
              <td>
                <Row>
                  <Col>
                    <Row className="d-flex align-items-center text-muted justify-content-around">
                      <Col>
                        <Avatar style={{ background: '#7B1FA2' }}>{comment.nombre.slice(0, 2)}</Avatar> {comment.nombre}
                      </Col>
                    </Row>
                  </Col>
                  <Col className="d-flex align-items-center text-muted justify-content-around">
                    {FormatDate(props.comments[0].fechacomentario)}
                  </Col>
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
      }
      {props.comments.length === 0 &&
        <Row className='mt-3'>
          <Col>
            <h4>No hay comentarios para mostrar. ¡Dejanos uno!</h4>
          </Col>
        </Row>
      }
    </>
  )
}

export default Comment