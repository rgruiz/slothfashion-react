import React from 'react';
import { Navbar, Nav, Col } from 'react-bootstrap'
import { Drawer } from 'rsuite'
import Login from '../Login/Login'
import SearchBar from '../SearchBar/SearchBar'
import Cookies from 'universal-cookie'
import { cookieName } from '../../constants/Cookie'
import RecuperarCookie from '../Cookies/RecuperarCookie'
import 'rsuite/dist/styles/rsuite-default.css'; // or 'rsuite/dist/styles/rsuite-default.css'

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      size: 'xs'
    };
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  clearUserCookies = (e) => {
    e.preventDefault();
    const cookies = new Cookies();
    cookies.remove(cookieName);
    window.location.replace("/");
  }

  close() {
    this.setState({
      show: false
    });
  }

  toggleDrawer() {
    this.setState({ show: true });
  }

  render() {

    const cookie = RecuperarCookie();

    const width = window.innerWidth || document.documentElement.clientWidth ||
      document.body.clientWidth;

    return (
      <>
        <Navbar bg="light" expand="md" className="padding-nav border-nav" variant="light">
          <Navbar.Brand href="/">
            <img src={require("../../img/LOGO-NEGRO.png")} className='header-logo' alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" bsPrefix="no-margin-top navbar-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Col xs={12}>
              <SearchBar onTagsChange={this.onTagsChange} />
            </Col>
            <Col xs={12}>
              <Nav className="mr-auto left-align">
                {cookie !== undefined && <> <Nav.Link href="/newpost" >Nueva publicación</Nav.Link>
                  <Nav.Link href="/historial" >Ver Historial</Nav.Link></>}
                {cookie !== undefined ? <Nav.Link onClick={this.clearUserCookies}>Cerrar Sesión</Nav.Link> : <Nav.Link onClick={this.toggleDrawer}>Login</Nav.Link>}
              </Nav>
            </Col>
          </Navbar.Collapse>
        </Navbar>

        {width > 440 &&
          <Drawer
            show={this.state.show}
            onHide={this.close}
            backdrop={true}
            autoFocus={true}
            size={this.state.size}
          >
            <Drawer.Header>
              <Drawer.Title>Login</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Login></Login>
            </Drawer.Body>
          </Drawer>
        }
        {width <= 440 &&
          <Drawer
            show={this.state.show}
            onHide={this.close}
            backdrop={true}
            autoFocus={true}
            full
          >
            <Drawer.Header>
              <Drawer.Title>Login</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Login></Login>
            </Drawer.Body>
          </Drawer>
        }
      </>
    )
  }
}

export default Header