import React from 'react'
import POSTHacerCompra from '../DB connections/POSTHacerCompra'

class ValidateMPRequests extends React.Component {
  state = {
  }

  async componentDidMount() {
    if (this.props.external_reference !== undefined && this.props.status === 'approved') {
      const URLData = this.props.external_reference.split("-")
      const dataCompra = {
        idpublicacion: URLData[0],
        contraparte: URLData[1]
      }

      await POSTHacerCompra(dataCompra)

    }
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default ValidateMPRequests;