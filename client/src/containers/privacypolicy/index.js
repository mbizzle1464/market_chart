import React from "react";
import { withRouter } from "react-router-dom";

class PrivacyPolicy extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="stripe" />
      <div className="widget">
        <h1>Privacy Policy</h1>
        <div className="search-container">
          <h2>Policy</h2>
          <p>
            This privacy policy sets forth how personal information is collected and used, 
            that is provided on Internet Web site located at www.marketchart.com and the associated mobile application known as "Market Chart"
            as owned and operated by Market Chart LLC (d / b / a Market Chart).By using marketchart.com you 
            agree to be bound by the terms and conditions of this Agreement and Market Chart Privacy and Security Policy, as they may be amended from time to time in the future.
        </p>
        <p>
            Market Chart stresses its privacy and security standards to guard against identity theft and provide security
            for your personal information.We regularly re - evaluate our privacy and security policies and adapt them as necessary to deal with new challenges.
        </p>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default withRouter(PrivacyPolicy);