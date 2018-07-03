import React from 'react'
import { withRouter } from 'react-router-dom'

import { Auth } from 'aws-amplify'

class SignUp extends React.Component {
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
    .catch(err => alert('There was an issue signing up because ' + err.message))
  }
  confirmSignUp = () => {
    Auth.confirmSignUp(this.state.username, this.state.authCode)
    .then(() => this.props.history.push('/mystocks'))
    .catch(err => alert('There was an issue signing up because ' + err.message))
  }
  render() {
    const { showConfirmation } = this.state
    return (
      <div>
        {
          !showConfirmation && (
            <div>
              <input
                placeholder='Username'
                onChange={evt => this.onChange('username', evt.target.value)}
              />
              <input
                placeholder='Password'
                type='password'
                onChange={evt => this.onChange('password', evt.target.value)}
              />
              <input
                placeholder='Email'
                onChange={evt => this.onChange('email', evt.target.value)}
              />
              <input
                placeholder='Phone Number'
                onChange={evt => this.onChange('phone_number', evt.target.value)}
              />
              <div onClick={this.signUp}>
              <p>Enter</p> 
              </div>
            </div>
          )
        }
        {
          showConfirmation && (
            <div>
              <input
                onChange={evt => this.onChange('authCode', evt.target.value)}
                placeholder='Confirmation Code'
              />
              <div onClick={this.confirmSignUp}>
                <p>Confirm Sign Up</p>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default withRouter(SignUp)