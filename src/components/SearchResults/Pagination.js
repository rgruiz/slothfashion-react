import React from 'react'
import { Col, Row } from 'react-bootstrap'

class Pagination extends React.Component {

  state = {
    ...this.state,
    page: this.props.page,
    max: 12,
    maxPages: this.props.maxPages
  }

  componentDidMount = () => {
    this.setState({ ...this.state, page: this.props.page, maxPages: this.props.maxPages })
  }

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      this.setState({ ...this.state, page: this.props.page, maxPages: this.props.maxPages })
    }
  }

  render() {
    return (
      <>
        <Row className='text-center mt-2'>
          <Col>
            {this.state.page === 1 &&
              <button disabled className="btn btn-outine-primary btn-page mr-1">Previa</button>
            }
            {this.state.page !== 1 &&
              <button className="btn btn-outine-primary btn-page mr-1" onClick={() => this.props.changePage(this.state.page - 1)}>Previa</button>
            }

            {this.state.page === this.state.maxPages &&
              <button className="btn btn-outine-primary btn-page ml-1" disabled>Siguiente</button>
            }
            {this.state.page !== this.state.maxPages &&
              <button className="btn btn-outine-primary btn-page ml-1" onClick={() => this.props.changePage(this.state.page + 1)}>Siguiente</button>
            }
          </Col>
        </Row>
      </>
    )
  }
}

export default Pagination