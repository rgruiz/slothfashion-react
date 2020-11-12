import React from 'react'
import ValidateMPRequests from '../components/ValidateMPRequests/ValidateMPRequests'

class ValidateMPRequestsPage extends React.Component {

  render() {
    console.log(this.props)
    const params = new URLSearchParams(this.props.location.search)
    const external_reference = params.get('external_reference')
    const status = params.get('status')

    return (
      <ValidateMPRequests external_reference={external_reference} status={status} />
    )
  }

}

export default ValidateMPRequestsPage