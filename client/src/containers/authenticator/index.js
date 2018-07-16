import React, { Component } from "react";
import { Authenticator } from "aws-amplify-react";
import { Grid, Message } from 'semantic-ui-react'
import LoginForm from "../loginform";
import RegisterForm from "../registerform";
import { Link } from "react-router-dom";  

export default class Login extends Component {
  state = {
    showSignIn: true
  }
  switchState = (showSignIn) => {
    this.setState({
      showSignIn
    })
    console.log(showSignIn);  
  }
  
  render() {

    const { showSignIn } = this.state
    return (
      <React.Fragment>
      <div className="stripe" />
      <div className="widget">
      <Authenticator hideDefault>
      {
          showSignIn ? (
            <LoginForm />
          ) : (
            <RegisterForm />
          ) 
        }
        <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'
              >
        <Grid.Column style={{ maxWidth: 450 }}>
        <Message>
          New to us? <a onClick={() => this.switchState(false)} style={{cursor: 'pointer'}}>Sign Up</a>
        </Message>
        <Message>
         Have an account? <a onClick={() => this.switchState(true)} style={{cursor: 'pointer'}}>Sign In</a>
        </Message>
        <Message> 
          <Link to="/forgotpassword" style={{cursor: 'pointer'}}>Forgot Password?</Link>
        </Message>
        </Grid.Column>
        </Grid>
      </Authenticator>
      </div>
      </React.Fragment>
    );
  }
}
