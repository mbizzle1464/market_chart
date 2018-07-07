import React, { Component } from "react";
import { Authenticator } from "aws-amplify-react";
import { Grid, Message } from 'semantic-ui-react'
import { Bootstrap } from 'a-theme-react';
import LoginForm from "../loginform";
import RegisterForm from "../registerform";
import ForgotPasswordForm from "../forgotpasswordform";


export default class Login extends Component {
  state = {
    showSignIn: true
  }
  switchState = (showSignIn) => {
    this.setState({
      showSignIn
    })
  }
  render() {
      const { showSignIn } = this.state
    return (
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
          New to us? <a onClick={() => this.switchState(false)}>Sign Up</a>
        </Message>
        <Message>
         Have an account? <a onClick={() => this.switchState(true)}>Sign In</a>
        </Message>
        </Grid.Column>
        </Grid>
      </Authenticator>

    );
  }
}

