import React from "react";
import { withRouter } from "react-router-dom";

class ContactUs extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="stripe" />
      <div className="widget">
        <h1>Contact Us</h1>
        <div className="search-container">
          <h2>Contact</h2>
          <p>
              If you have any questions about our Privacy Policy, please contact Market Chart Customer Service at: <br />
              <a href="mailto:support@marketchart.com" title>support@marketchart.com</a>
           </p>
          <p>
              Market Chart LLC <br />
              3315 Daniel Ave <br />
              Dallas, TX 75205
          </p>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default withRouter(ContactUs);