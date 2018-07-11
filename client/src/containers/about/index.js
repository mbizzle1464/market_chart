import React from "react";
import { withRouter, Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="stripe" />
      <div className="widget">
        <h1>About</h1>
        <div className="search-container">
          <h2>Purpose</h2>
          <p>
            Market Chart is designed to enable you to track the longterm results
            of your stock market investments as well as to identify new
            potential stock purchases using our tools.
          </p>
          <p>
            Please <Link to="/auth">sign-up</Link> for an account and get
            started today.
          </p>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default withRouter(About);
