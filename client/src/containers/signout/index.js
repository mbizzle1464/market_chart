import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'



class Signout extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign Out</h1>
        <p onClick={() => {
          Auth.signOut()
            .then(() => {
              this.props.history.push('/')
            })
            .catch(() => console.log('error signing out...'))
        }}>Sign Out</p>
      </div>
    )
  }
}

Signout = withRouter(Signout)

export default Signout