import React from "react";
import { Link, withRouter } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo-container">
          <Link to="/">
            <img height="80px" src="/images/logo/logo.svg" />
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
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
