import React from 'react';
import { ValidationForm, TextInput, TextInputGroup } from 'react-bootstrap4-form-validation'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomLayout from './ImageUpload'
import TransformPostData from '../utils/TransformPostData'
import POSTPost from '../DB connections/POSTPost'
import GETPostByID from '../DB connections/GETPostByID'
import '../../styles/PostForm.css'
import PUTPost from '../DB connections/PUTPost';

class Home extends React.Component {
  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({ files })
    };
    this.state = {
      ...this.state,
      post_data: {
        description: "",
        price: "",
        tags: "",
        active: true,
        file1: "",
        file2: "",
        file3: "",
        file4: "",
        imagesModified: false,
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state, "post_data": { ...this.state.post_data, [e.target.name]: e.target.value }
    })
  }

  handleChangeCheck = (e, value) => {
    this.setState({
      ...this.state, "post_data": { ...this.state.post_data, [e.target.name]: value }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.post_data.file1 === "" &&
      this.state.post_data.file2 === "" &&
      this.state.post_data.file3 === "" &&
      this.state.post_data.file4 === "") {
      alert("La publicación necesita al menos una imagen")
    }
    else {
      if (this.props.type !== 'edit') {
        POSTPost(this.state.post_data)
      }
      else {
        PUTPost(this.state.post_data)
      }
    }

  }

  async componentDidMount() {
    if (this.props.type === "edit") {
      var post = await GETPostByID(this.props.postId)

      const post_data = await TransformPostData(post)

      this.setState({
        ...this.state, "post_data": post_data
      })

    }
  }

  addFiles = (file, pos) => {
    const filepos = "file" + pos
    this.setState({ ...this.state, "post_data": { ...this.state.post_data, [filepos]: file, imagesModified: true } })
  }

  removeFiles = (pos) => {
    const filepos = "file" + pos
    this.setState({ ...this.state, "post_data": { ...this.state.post_data, [filepos]: undefined, imagesModified: true } })
  }

  render() {
    return (
      <>
        <h1 className='title-background title text-center'>Editar publicación</h1>
        <Container>
          <Row className='flex-box justify-content-around mt-4'>
            <Col xs={12} sm={10}>
              <ValidationForm onSubmit={this.handleSubmit} className="post_form">
                <Form encType='multipart/form-data'>
                  <Form.Row>
                    <Form.Group as={Col} xs='12' controlId="description">
                      <Form.Label>Descripción</Form.Label>
                      <TextInput name="description" id="description" multiline required
                        value={this.state.post_data.description}
                        onChange={this.handleChange}
                        pattern="{3,244}$"
                        rows='5'
                        errorMessage={{
                          required: "La descripción es requerida",
                          pattern: "El nombre debe tener entre 3 y 244 caracteres."
                        }}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} xs='10' md='4' controlId="price">
                      <Form.Label>Precio</Form.Label>
                      <TextInputGroup name="price" id="price"
                        value={this.state.post_data.price}
                        onChange={this.handleChange}
                        prepend={<span className="input-group-text">$</span>}
                        pattern="(?=^[0-9]*$).{0,}"
                        errorMessage={{
                          pattern: "El precio sólo admite números. Si no deseás vender dejá el campo en blanco."
                        }}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} sm={12} controlId="tags">
                      <Form.Label>Etiquetas - ingresá las etiquetas separadas por espacios</Form.Label>
                      <TextInput name="tags" id="tags" multiline required
                        value={this.state.post_data.tags}
                        onChange={this.handleChange}
                        pattern="[A-Za-z \-ñÑçÇ]{1,}"
                        rows='3'
                        errorMessage={{
                          required: "Necesitás al menos una etiqueta.",
                          pattern: "Las etiquetas admiten letras y guiones."
                        }}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} sm={12} controlId="images">
                      <Form.Label>Imágenes</Form.Label>
                      {/*                     <TextInput name="images" id="images" required
                      value={this.state.post_data.images}
                      onChange={this.handleChange}
                    /> */}
                      <Row>
                        <Col xs={12} sm={6} lg={3}>
                          <CustomLayout addFiles={this.addFiles} file={this.state.post_data.file1}
                            removeFiles={this.removeFiles} pos='1' />
                        </Col>
                        <Col xs={12} sm={6} lg={3}>
                          <CustomLayout addFiles={this.addFiles} file={this.state.post_data.file2}
                            removeFiles={this.removeFiles} pos='2' />
                        </Col>
                        <Col xs={12} sm={6} lg={3}>
                          <CustomLayout addFiles={this.addFiles} file={this.state.post_data.file3}
                            removeFiles={this.removeFiles} pos='3' />
                        </Col>
                        <Col xs={12} sm={6} lg={3}>
                          <CustomLayout addFiles={this.addFiles} file={this.state.post_data.file4}
                            removeFiles={this.removeFiles} pos='4' />
                        </Col>
                      </Row>
                    </Form.Group>
                  </Form.Row>
                  {/*                 <Form.Group>
                  <Checkbox name="active" id="active" type="checkbox" label="Activar publicación"
                    value={this.state.post_data.active}
                    onChange={this.handleChangeCheck} />
                </Form.Group> */}
                  <Row className='justify-content-center'>
                    <Col xs={12} md={4}>
                      <Link to='/'>
                        <Button className="btn btn-block" variant="danger">
                          Cancelar
                    </Button>
                      </Link>
                    </Col>
                    <Col xs={12} md={4}>
                      <Button className="btn btn-block" variant="primary" type="submit">
                        Guardar
                  </Button>
                    </Col>
                  </Row>
                </Form>
              </ValidationForm>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Home