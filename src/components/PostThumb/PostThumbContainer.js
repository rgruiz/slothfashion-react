import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import PostThumb from './PostThumb'
import FilterPosts from '../DB connections/FilterPosts'

class Home extends React.Component {

  state = {
    ...this.state,
    posts: "",
    error: "No hay resultados"
  }

  async componentDidUpdate(prevProps) {
/*      no esta andando bien borrar todas las tags, porque dejaria la ultima busqueda. quizas se podria cambiar 
     para que cuando se borre todo se muestre algo por defecto (tags = "") */
    if (prevProps !== this.props && this.props !== null && this.props.tags !== "") {
      const filter = {
        data: {
          ascdesc: this.props.orderedby,
          orderedby: this.props.filter,
          tags: this.props.tags
        }
      }
      const posts = await FilterPosts(filter)
      this.setState({ ...this.state, posts: posts })
    }
  }

  render() {
    if (this.state.posts !== "" && this.state.posts) {
      return (
        <>
          <Container fluid>
            <Row>
              {this.state.posts.map((post) => {
                return (<Col xs={12} sm={4} md={3}>
                  <PostThumb data={post}/>
                </Col>)
              })}
            </Row>
          </Container>
        </>
      )
    }
    else return (<>{this.state.error}</>)
  }
}

export default Home