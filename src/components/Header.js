import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends React.Component {

  render() {
    return (
      <Navbar bg="light" expand="md" className="padding-nav border-nav" variant="light">
        <Navbar.Brand href="/">
          <img src={require("../img/LOGO-NEGRO.png")} className='header-logo' alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" bsPrefix="no-margin-top navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto right-align">
            <Nav.Link href="#" >Ver Historial</Nav.Link>
            <Nav.Link href="#" >Cerrar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header