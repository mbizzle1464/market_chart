import React from "react";
import { withRouter } from "react-router-dom";
import CompanyDetails from "../company";
import CompanyDescription from "../company-description";
import CompanyFinancials from "../company-financials";
import CompanyStats from "../company-stats";
import CompanyEarnings from "../company-earnings";
import CompanyPeers from "../company-peers";
import CompanyChart from "../company-chart";

class CorporatePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-wrapper corporate-page">
          <CompanyDetails />
          <CompanyDescription />
          <CompanyChart />
          <CompanyFinancials />
          <CompanyStats />
          <CompanyEarnings />
          <CompanyPeers />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(CorporatePage);
