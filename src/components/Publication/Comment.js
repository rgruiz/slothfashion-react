import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import FormatDate from '../utils/FormatDate'
import { Avatar } from 'rsuite'

class Comment extends React.Component {

  /*handleChange = (e) => {
    this.setState({
      ...this.state, [e.target.name]: e.target.value 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //POST COMMENT
    POSTComment(this.state.post_data)

  }*/

  render() {
    return (
    <>
      {this.props.comments.length !== 0 &&
        <div className='comment-container'>
          <Table striped bordered hover className='comment'>
            <tbody>
              {this.props.comments.map((comment) => <tr>
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
                      {FormatDate(comment.fechacomentario)}
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
        </div>
      }
      {this.props.comments.length === 0 &&
        <Row className='mt-3'>
          <Col>
            <h4>No hay comentarios para mostrar. ¡Dejanos uno!</h4>
          </Col>
        </Row>
      }
      
    </>
  )
}
}

export default Comment