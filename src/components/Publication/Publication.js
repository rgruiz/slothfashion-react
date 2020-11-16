import React from 'react'
import { Row, Col, Container, Button, Form, InputGroup } from 'react-bootstrap'
import ImgPost from './ImgPost'
import Comment from './Comment'
import { withRouter } from "react-router"
import DisplayTags from '../DisplayTags/DisplayTags'
import RecuperarCookie from '../Cookies/RecuperarCookie'
import GETPostByID from '../DB connections/GETPostByID'
import GETMercadoPagoLink from '../DB connections/GETMercadoPagoLink'
import DecryptData from '../utils/DecryptData'
import POSTComment from '../DB connections/POSTComment'
import '../../styles/Publication.css'

class Publication extends React.Component {

    state = {
        postId: this.props.postId,
        userId: 0,
    }

    handleChange = (e) => {
        console.log(this.state)
        this.setState({
            ...this.state, [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //POST COMMENT
        const tokenAndComment = {
            token: this.state.token,
            comment: {
                comentador: this.state.userId,
                comentario: this.state.comentario,
                publicacion: this.state.postId,
            }
        }

        POSTComment(tokenAndComment)
    }

    async componentDidMount() {
        try {
            //desencripta el valor de la URL que tiene el id de la publicacion
            const postId = DecryptData(this.state.postId)
            this.setState({ ...this.state, postId: postId })

            const postData = await GETPostByID(postId)
            this.setState({ ...this.state, post: postData })

            const cookie = RecuperarCookie()
            if (cookie !== undefined) {
                this.setState({ ...this.state, userId: cookie.idusuario, token: cookie.token })
            }

            if (postData.post.precio > 0 && this.state.userId > 0 && postData.post.estado !== 'inactivo') {
                // idComprador vendria de la cookie --> los links de compra solo existen si el usuario esta logueado
                const tokenAndMPLink = {
                    token: cookie.token,
                    mpLinkData: {
                        idPost: postData.post.idpublicacion,
                        idBuyer: cookie.idusuario
                    }
                }
                const datapreferenceid = await GETMercadoPagoLink(tokenAndMPLink)

                var script = document.createElement('a')
                var linkText = document.createTextNode("Comprar")
                script.appendChild(linkText)
                script.title = "Comprar"
                script.className = "btn btn-block boton-pago btn-primary"
                script.href = datapreferenceid
                document.body.appendChild(script)
                this.div.appendChild(script);
            }
        }
        catch (err) {
            alert("La URL ingresada no es valida")
            window.location = '/'
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
                                {this.state.post.post.precio > 0 && this.state.userId > 0 && this.state.post.post.estado !== 'inactivo' &&
                                    <Col xs={12} className="mt-3 mb-3">
                                        <div ref={el => (this.div = el)}></div>
                                    </Col>
                                }
                            </Row>
                        </Col>
                        <Col xs={12} lg={5}>
                            <Comment comments={this.state.post.comments} />
                            {this.state.userId > 0 &&
                                <Form onSubmit={this.handleSubmit}>
                                    <InputGroup>
                                        <Form.Control
                                            as="textarea" rows={3}
                                            placeholder="Comentario..."
                                            aria-label="Comentario..."
                                            aria-describedby="basic-addon2"
                                            name="comentario"
                                            value={this.state.comentario}
                                            onChange={this.handleChange}
                                            maxLength="250"
                                        />
                                        <InputGroup.Append>
                                            <Button variant="primary" type="submit"><i class="fa fa-send-o"></i></Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Form>
                            }
                        </Col>
                    </Row>
                </Container>
            )
        }
        else return (<></>)
    }
}

export default withRouter(Publication)