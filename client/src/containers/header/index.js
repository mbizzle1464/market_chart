import React from "react";
import { Link, withRouter } from "react-router-dom";
let user = localStorage.getItem(`CognitoIdentityServiceProvider.37oeqm62ij2n2g5opttuhveunt.LastAuthUser`)
let login = localStorage.getItem(`CognitoIdentityServiceProvider.37oeqm62ij2n2g5opttuhveunt.${user}.accessToken`);
class Header extends React.Component {

    state = {
      login: login
    }
    switchState = (signOut) => {
      this.setState({
        signOut
      })
      //console.log(signOut);
    }
  render() {
    const { signOut } = this.state
    return (
      <header>
        <div className="logo-container">
          <Link to="/">
            <img height="100px" src="/images/logo/logo.svg" />
          </Link>
        </div>
        <nav>
          <ul className="nav-list">
            <li className="nav-list__item">
              <Link to="/about">About</Link>
              {/* <a href="/about">About</a> */}
            </li>
            <li className="nav-list__item">
              <Link to="/mystocks">Portfolio</Link>
            </li>
            <li className="nav-list__item">
              <Link to="/news">News</Link>
            </li>
              {
              signOut ? (
                <li className="nav-list__item">
                <Link to="/auth">Sign In</Link>              
              </li>
              ) : (
                <li className="nav-list__item">
                <Link to="/signout">Sign Out</Link>
              </li>
              )
            }
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
