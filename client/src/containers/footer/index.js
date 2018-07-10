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
        <ul class="center">
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/tos">
            <li>Terms of Service</li>
          </Link>
          <Link to="/privacy">
            <li>Privacy Policy</li>
          </Link>
        </ul>
        <div className="footer_logo">
          <img height="80px" src="/images/logo/logo.svg" />
        </div>
        <div class="copyright">
          &copy; 2018 Edgar Sandoval, Jared Gilpin, and Mike Bizzle
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
