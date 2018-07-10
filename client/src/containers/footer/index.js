import React from "react";
import { Link, withRouter } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="widget footer">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/mystocks">
            <li>Portfolio</li>
          </Link>
          <Link to="/news">
            <li>News</li>
          </Link>
        </ul>
        <div className="">Middle Part</div>
        <div className="">Right Side</div>
      </div>
    );
  }
}

export default withRouter(Footer);
