import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PostThumbContainer from '../PostThumb/PostThumbContainer'
import Pagination from './Pagination'

class SearchResults extends React.Component {

  state = {
    ...this.state,
    orderedby: "DESC",
    filter: "fechaposteo",
    page: this.props.page,
    maxPages: 1,
    max: 12
  }

  changePage = (value) => {
    this.setState({ ...this.state, page: value })
  }

  changeMaxPages = (value) => {
    this.setState({ ...this.state, maxPages: value })
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
    return (
      <>
        <Container fluid>
          <Row>
            <PostThumbContainer orderedby={this.state.orderedby} page={this.state.page} changePage={this.changePage}
              changeMaxPages={this.changeMaxPages} filter={this.state.filter} tags={this.props.tags} max={this.state.max} />
            <Pagination max={this.state.max} maxPages={this.state.maxPages}
              page={this.state.page} changePage={this.changePage} changeMaxPages={this.changeMaxPages} />
          </Row>
        </Container>
      </>
    )
  }
}

export default SearchResults