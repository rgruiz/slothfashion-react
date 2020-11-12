import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { withRouter } from "react-router";
import PostThumbContainer from '../PostThumb/PostThumbContainer'


class SearchResults extends React.Component {

  state = {
    ...this.state,
    orderedby: "DESC",
    filter: "fechaposteo",
    page: this.props.page
  }

  changePage = (page) => {
    this.setState({ ...this.state, page: page })
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.tags !== this.props.tags) {
      this.setState({ ...this.state, tags: this.props.tags, page: 1 })
    }
  }

  componentDidMount = () => {
    this.setState({ ...this.state, tags: this.props.tags, page: 1 })
  }

  render() {
    const tags = this.props.tags
    console.log(tags)
    return (
      <>
        <Container fluid>
          <Row>
            <PostThumbContainer orderedby={this.state.orderedby} page={this.state.page} changePage={this.changePage}
              filter={this.state.filter} tags={this.props.tags} />
          </Row>
        </Container>
      </>
    )
  }
}

export default withRouter(SearchResults)