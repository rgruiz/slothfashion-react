import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import PostThumb from './PostThumb'
import Pagination from '../SearchResults/Pagination'
import FilterPosts from '../DB connections/FilterPosts'

class PostThumbContainer extends React.Component {

  state = {
    ...this.state,
    posts: "",
    error: "No hay resultados. Por favor realizá una búsqueda y eligiendo la etiqueta deseada de la lista.",
    page: this.props.page,
    max: 12,
    maxPages: 1,
  }

  async componentDidUpdate(prevProps) {
    /*   no esta andando bien borrar todas las tags, porque dejaria la ultima busqueda. quizas se podria cambiar 
         para que cuando se borre todo se muestre algo por defecto (tags = "") */
    if (prevProps !== this.props && this.props !== null && this.props.tags !== "" && this.props.tags !== undefined) {
      const filter = {
        data: {
          ascdesc: this.props.orderedby,
          orderedby: this.props.filter,
          tags: this.props.tags,
          page: this.state.page,
          max: this.state.max,
        }
      }
      if (this.props.tags !== prevProps.tags) {
        this.changeMaxPages(1)
        this.changePage(1)
      }

      const posts = await FilterPosts(filter)
      if (posts !== undefined && posts.length > 0) {
        const maxPages = Math.ceil(posts[0].maxresults / this.state.max)
        this.changeMaxPages(maxPages)
        this.setState({ ...this.state, posts: posts, page: this.state.page })
      }
      else {
        if (this.state.page === 1) {
          this.setState({ ...this.state, posts: "" })
        }
        else {
          this.changeMaxPages(1)
          this.changePage(1)
        }
      }
    }
    if (prevProps !== this.props && this.props.tags === "") {
      this.setState({ ...this.state, posts: "", page: 1 })
    }
  }

  async componentDidMount() {
    const filter = {
      data: {
        ascdesc: this.props.orderedby,
        orderedby: this.props.filter,
        tags: this.props.tags,
        page: this.state.page,
        max: 12,
      }
    }

    if (this.props.tags !== "" && this.props.tags !== undefined) {
      const posts = await FilterPosts(filter)
      this.setState({ ...this.state, posts: posts, page: this.state.page })
    }
    else {
      this.setState({ ...this.state, posts: "", page: this.state.page })
    }
  }

  changePage = (page) => {
    this.setState({ ...this.state, page: page })
    this.props.changePage(page)
  }

  changeMaxPages = (page) => {
    this.setState({ ...this.state, maxPages: page })
  }


  render() {
    if (this.state.posts !== "" && this.state.posts) {
      return (
        <>
          <Container fluid>
            <Row>
              {this.state.posts.map((post) => {
                return (<Col xs={12} sm={6} lg={4} xl={3}>
                  <PostThumb data={post} />
                </Col>)
              })}
            </Row>
            <Pagination max={this.state.max} maxPages={this.state.maxPages}
              page={this.state.page} changePage={this.changePage} changeMaxPages={this.changeMaxPages} />
          </Container>
        </>
      )
    }
    else {
      return (
        <Container fluid>
          <Row>
            <Col className="mt-3">
              {this.state.error}
            </Col>
          </Row>
        </Container>
      )
    }
  }
}

export default PostThumbContainer