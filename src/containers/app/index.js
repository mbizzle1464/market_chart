import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import About from "../about";
import CompanyDetails from "../company";
import CompanyDescription from "../company-description";
import CompanyFinancials from "../company-financials";
import CompanyNews from "../company-news";
import CompanyStats from "../company-stats";
import CompanyEarnings from "../company-earnings";
import CompanyPeers from "../company-peers";
import CompanyChart from "../company-chart";

const App = () => (
  <div>
    {/* <header>
      <Link to="/">Home </Link>
      <Link to="/companies/msft">MSFT</Link>
      <Link to="/companies/aapl">AAPL</Link>
    </header> */}

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route
        exact
        path="/companies/:companyId"
        component={() => (
          <div>
            <CompanyDetails />
            <CompanyChart />
            <CompanyDescription />
            <CompanyNews />
            <CompanyFinancials />
            <CompanyStats />
            <CompanyEarnings />
            <CompanyPeers />
          </div>
        )}
      />
    </main>
  </div>
);

export default App;
