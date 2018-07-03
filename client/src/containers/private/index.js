import React from 'react'
import {
  withRouter,
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'
import { Auth } from 'aws-amplify'
import Authenticator from '../authenticator'
import  Home from '../home'
import MyStocks from "../my-stocks";
import About from "../about";
import News from "../news";
import Signout from "../signout";



class PrivateRoute extends React.Component {
  state = {
    loaded: false,
    isAuthenticated: false
  }
  componentDidMount() {
    this.authenticate()
    this.unlisten = this.props.history.listen(() => {
      Auth.currentAuthenticatedUser()
        .then(user => console.log('user: ', user))
        .catch(() => {
          if (this.state.isAuthenticated) this.setState({ isAuthenticated: false })
        })
    });
  }
  componentWillUnmount() {
    this.unlisten()
  }
  authenticate() {
    Auth.currentAuthenticatedUser()
      .then(() => {
        this.setState({ loaded: true, isAuthenticated: true })
      })
      .catch(() => this.props.history.push('/auth'))
  }
  render() {
    const { component: Component, ...rest } = this.props
    const { loaded , isAuthenticated} = this.state
    if (!loaded) return null
    return (
      <Route
        {...rest}
        render={props => {
          return isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/auth",
              }}
            />
          )
        }}
      />
    )
  }
}

PrivateRoute = withRouter(PrivateRoute)

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/about-us" component={About} />
      <Route exact path="/auth" component={Authenticator} />
      <PrivateRoute path='/mystocks' component={MyStocks} />
      <PrivateRoute path='/signout' component={Signout} />
      <Route exact path="/News" component={News} />
    </Switch>
  </Router>
)

export default Routes