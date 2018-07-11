import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button,Grid, Header } from 'semantic-ui-react'
import { Auth } from 'aws-amplify'



class Signout extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="stripe" />
      <div className="widget">
      <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'
              >
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
                    {' '}See you next time!
                  </Header>
          <Button><p onClick={() => {
          Auth.signOut()
            .then(() => {
              this.props.history.push('/')
            })
            .catch(() => console.log('error signing out...'))
        }}>Sign Out</p>
        </Button>
        </Grid.Column>
        </Grid>
      </div>
      </React.Fragment>
    )
  }
}

Signout = withRouter(Signout)

export default Signout