import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import ImgPost from './ImgPost'
import Comment from './Comment'
import GETPostByID from '../DB connections/GETPostByID'
import DisplayTags from '../DisplayTags/DisplayTags'
import GETMercadoPagoLink from '../DB connections/GETMercadoPagoLink'
import '../../styles/Publication.css'

class Publication extends React.Component {

    state = {
        postId: this.props.postId
    }

    async componentDidMount() {
        const postData = await GETPostByID(this.state.postId)
        this.setState({ ...this.state, post: postData })

        const idPost = { idPost: postData.post.idpublicacion }

        if (postData.post.precio > 0) {

            const datapreferenceid = await GETMercadoPagoLink(idPost)

            var script = document.createElement('a')
            var linkText = document.createTextNode("Comprar")
            script.appendChild(linkText)
            script.title = "Comprar"
            script.href = datapreferenceid
            document.body.appendChild(script)
            this.div.appendChild(script);
        }
    }

    render() {
        if (this.state.post !== undefined) {
            return (
                <Container className="mt-4">
                    <Row>
                        <Col xs={12} lg={7}>
                            <Row className='mb-3'>
                                <Col>
                                    <ImgPost images={this.state.post.images} />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col>
                                    <div className="postDesc">
                                        {this.state.post.post.descripcion}
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-5'>
                                <Col>
                                    <DisplayTags tags={this.state.post.tags} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="postPrice">
                                        $ {this.state.post.post.precio}
                                    </div>
                                </Col>
                                {this.state.post.post.precio > 0 &&
                                    <Col xs={12} className="mt-3">
                                        <Button className="btn-block boton-pago" ref={el => (this.div = el)}></Button>
                                    </Col>
                                }
                            </Row>
                        </Col>
                        <Col xs={12} lg={5}>
                            <Comment comments={this.state.post.comments} />
                        </Col>
                    </Row>
                </Container>
            )
        }
        else return (<></>)
    }
}

export default Publication