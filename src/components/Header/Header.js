import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Drawer } from 'rsuite'
import Login from '../Login/Login'
import SearchBar from '../SearchBar/SearchBar'
import TagsPopulares from '../SearchBar/TagsPopulares'
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
        
    return (
      <>
        <Navbar bg="light" expand="md" className="padding-nav border-nav" variant="light">
          <Navbar.Brand href="/">
            <img src={require("../../img/LOGO-NEGRO.png")} className='header-logo' alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" bsPrefix="no-margin-top navbar-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
              <SearchBar onTagsChange={this.onTagsChange} />
            <Nav className="ml-auto right-align">
              <Nav.Link href="/historial" >Ver Historial</Nav.Link>
              {cookie!==undefined ? <Nav.Link onClick={this.clearUserCookies}>Cerrar Sesión</Nav.Link> : <Nav.Link onClick={this.toggleDrawer}>Login</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
      </>
    )
  }
}

export default Header