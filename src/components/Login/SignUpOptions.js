import React from 'react'
import {Drawer} from 'rsuite';
import {Col,Button} from 'react-bootstrap'
import SignUp from '../Signup/SignUp'

class SignupOptions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      size: 'md',
      isLogged: false
    };
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
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
    return (
      <>
      <Col className='signupRedirect'>
        <Col xs={12}>
          <div className='text-center'> 
            ¿Todavía no tenés cuenta?
            <br></br>
            <br></br>
            <Button onClick={this.toggleDrawer} className="color-primario">Registrate</Button>
          </div>
        </Col>
      </Col>
      <Drawer
        show ={this.state.show}
        onHide ={this.close}
        backdrop = {true}
        autoFocus = {true}
        size = {this.state.size}     
      >
        <Drawer.Header>
          <Drawer.Title></Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <SignUp></SignUp>
        </Drawer.Body>
      </Drawer>
      </>
      );
    }
}

export default SignupOptions;