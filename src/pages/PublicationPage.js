import React from 'react'
import Publication from '../components/Publication/Publication'

class PublicationPage extends React.Component {
  render() {
    return (
        /* <Publication postId={this.props.location.state.postId}/> */
        <Publication postId={this.props.match.params.id} />
    )
  }
}

export default PublicationPage