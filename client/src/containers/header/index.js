import React from "react";
import { Link, withRouter } from "react-router-dom";

let test = localStorage.getItem("aws-amplify-cacheCurSize");
class Header extends React.Component {
  render() {
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
            <li className="nav-list__item">
              <Link to="/signout">Sign Out</Link>
            </li>
            {/* <li>{test}</li> */}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
