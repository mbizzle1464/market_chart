import React from 'react'
import { withRouter } from 'react-router-dom'
import SignIn from '../signin'
import SignUp from '../signup'

class Authenticator extends React.Component {
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
      <div>
        {
          showSignIn ? (
            <SignIn />
          ) : (
            <SignUp />
          )
        }
        <div>
          <p
            onClick={() => this.switchState(true)}
          >Sign In</p>
          <p
            onClick={() => this.switchState(false)}
          >Sign Up</p>
        </div>
      </div>
    )
  }
}

export default withRouter(Authenticator)