import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { Auth } from 'aws-amplify';
import { AuthPiece } from 'aws-amplify-react';


class RegisterForm extends AuthPiece {
    state = {
      username: '',
      password: '',
      email: '',
      phone_number: '',
      authCode: '',
      showConfirmation: false
    }
    onChange = (key, value) => {
      this.setState({
        [key]: value
      })
    }

    signUp = () => {
    const { username, password, email, phone_number } = this.state
    Auth.signUp({
      username,
      password,
      attributes: {
        email,
        phone_number
      }
    })
    .then(() => this.setState({ showConfirmation: true }))
    .catch(err => this.error(err));
  }
  confirmSignUp = () => {
    Auth.confirmSignUp(this.state.username, this.state.authCode)
      .then(() => this.props.history.push('/mystocks'))
      .catch(err => this.error(err));
  }
    render() {
        const { showConfirmation } = this.state
        return (
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
              {
                !showConfirmation && (
                  <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'
              >
                <Grid.Column style={{ maxWidth: 450 }}>
                  <Header as='h2' color='teal' textAlign='center'>
                    {' '}Register an account
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
                      <Form.Input
                        fluid
                        icon='mail'
                        iconPosition='left'
                        placeholder='Email@email.com'
                        name="email"
                        onChange={evt => this.onChange('email', evt.target.value)}
                      />
                      <Form.Input
                        fluid
                        icon = 'phone'
                        iconPosition = 'left'
                        placeholder = 'Use Format +1234567890'
                        name = "phone_number" 
                        onChange = { evt => this.onChange('phone_number', evt.target.value)}
                        />
                      <Button
                            color='teal'
                            fluid
                            size='large'
                            onClick={this.signUp}
                      >Register</Button>
                    </Segment>
                  </Form>
                </Grid.Column>
              </Grid>
                )
              }
              {
               showConfirmation && (
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
                                onClick={this.confirmSignUp.bind(this)}
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

               )
              }
            </div>
        )
    }
}

export default withRouter(RegisterForm)