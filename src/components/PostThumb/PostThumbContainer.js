import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import PostThumb from './PostThumb'
import FilterPosts from '../DB connections/FilterPosts'

class Home extends React.Component {

  state = {
    ...this.state,
    posts: ""
  }

  async componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
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
    if (this.state.posts !== "") {
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
    else return (<></>)
  }
}

export default Home