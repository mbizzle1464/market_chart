import React from 'react'
import { Button, Form, Grid, Header, Segment, Divider } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify';
import { AuthPiece } from 'aws-amplify-react';

class LoginForm extends AuthPiece {

state = {
    username: '',
    password: '',
    showConfirmation: false,
    user: {},
    authCode: '', 
    loggedIn: false
  }

  
  onChange = (key, value) => {
    this.setState({
      [key]: value, 
    })
 //   console.log(value); 
  }
  signIn = () => {
    Auth.signIn(this.state.username, this.state.password)
      .then(user => {
        this.setState({
          user,
          showConfirmation: true
        })
      })
      .catch(err => this.error(err));
}
 confirmSignIn = () => {
    const { history } = this.props
    Auth.confirmSignIn(this.state.user, this.state.authCode, this.state.user.challengeName)
      .then(user => {
        this.setState({ loggedIn: true})
        history.push('/mystocks')
      })
      .catch(err => this.error(err));
  }
    render() {
       console.log(this.state);
        return (
      <div>
        {
          !this.state.showConfirmation && (
            <div className='login-form'>
              {/*
                Heads up! The styles below are necessary for the correct render of this example.
                You can do same with CSS, the main idea is that all the elements up to the `Grid`
                below must have a height of 100%.
              */}
              <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                  height: 100%;
                }
              `}</style>
              <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'
              >
                <Grid.Column style={{ maxWidth: 450 }}>
                  <Header as='h2' color='teal' textAlign='center'>
                    {' '}Log-in to your account
                  </Header>
                  <Form size='large'>
                    <Segment>
                      <Form.Input
                        autoFocus
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='Username'
                        name="username"
                        onChange={evt => this.onChange('username', evt.target.value)}
                      />
                      <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name="password"
                        onChange={evt => this.onChange('password', evt.target.value)}
                      />

                      <Button
                            color='teal'
                            fluid
                            size='large'
                            onClick={this.signIn}
                      >Login</Button>
                      <Divider/>
                    </Segment>
                  </Form>
                </Grid.Column>
              </Grid>
            </div>
          )
        }
        {
          this.state.showConfirmation && (
            <div className='login-form'>
              {/*
                Heads up! The styles below are necessary for the correct render of this example.
                You can do same with CSS, the main idea is that all the elements up to the `Grid`
                below must have a height of 100%.
              */}
              <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                  height: 100%;
                }
              `}</style>
              <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'
              >
                <Grid.Column style={{ maxWidth: 450 }}>
                  <Header as='h2' color='teal' textAlign='center'>
                    {' '}Confirm your registration
                  </Header>
                  <Form size='large'>
                    <Segment>
                      <Form.Input
                        fluid
                        icon='puzzle'
                        iconPosition='left'
                        placeholder='Code'
                        name="code"
                        onChange={evt => this.onChange('authCode', evt.target.value)}
                      />

                      <Button.Group>
                          <Button
                                color='teal'
                                size='large'
                                onClick={this.confirmSignIn.bind(this)}
                          >Confirm</Button>
                          <Button.Or />
                          <Button
                                color='teal'
                                size='large'
                                onClick={this.resend}
                          >Resend</Button>
                      </Button.Group>
                    </Segment>
                  </Form>
                </Grid.Column>
              </Grid>
            </div>
          )
        }
      </div>
        )
    }
}

export default withRouter(LoginForm)