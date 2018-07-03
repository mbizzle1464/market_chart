import React from 'react'
import { Auth } from 'aws-amplify'

import { withRouter } from 'react-router-dom'

class SignIn extends React.Component {
  state = {
    username: '',
    password: '',
    showConfirmation: false,
    user: {},
    authCode: ''
  }
  onChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  signIn = () => {
    Auth.signIn(this.state.username, this.state.password)
      .then(user => {
        this.setState({ user, showConfirmation: true })
      })
      .catch(err => alert('There was an issue signing in because ' + err.message))
  }
  confirmSignIn = () => {
    const { history } = this.props
    Auth.confirmSignIn(this.state.user, this.state.authCode, this.state.user.challengeName)
      .then(user => {
        history.push('/mystocks')
      })
      .catch(err => alert('There was an issue signing in because ' + err.message))
  }
  render() {
    return (
      <div>
        {
          !this.state.showConfirmation && (
            <div>
              <input
                onChange={evt => this.onChange('username', evt.target.value)}
                placeholder='username'
              />
              <input
                type='password'
                onChange={evt => this.onChange('password', evt.target.value)}
                placeholder='password'
              />
              <div onClick={this.signIn}> 
              <p>Enter</p>               
              </div>
            </div>
          )
        }
        {
          this.state.showConfirmation && (
            <div>
              <input
                onChange={evt => this.onChange('authCode', evt.target.value)}
                
                placeholder='Confirmation Code'
              />
              <div onClick={this.confirmSignIn.bind(this)}>
                <p>Confirm Sign In</p>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}


export default withRouter(SignIn)