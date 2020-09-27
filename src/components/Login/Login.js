import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import SignupOptions from './SignUpOptions'

class Login extends Component {

  state = {
    ...this.state,
    mail: "",
    password: "",
  }

  /* va actualizando el state a medida que el usuario/cliente tipea */

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const jsonForm = (this.state);
    //POST LOGIN

  }

  render() {
    return (
    <>
      <Col className='fondito login-box rounded ancho-maximo-1000'>
        <Form onSubmit={this.handleSubmit} className="loginForm">
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control name="mail" id="mail" type="email" autoComplete="username" required
              value={this.state.mail}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" id="password" type="password" maxLength="15" autoComplete="current-password" required
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <div className='text-center'>
            <Button type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Col>
      <hr></hr>
      <SignupOptions></SignupOptions>
    </>
    );
  }
}

export default Login;