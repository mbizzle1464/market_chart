import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import About from "../about";
import News from "../news";
import Signin from "../signin";
import Signup from "../signup";
import Authenticator from "../authenticator";
import Private from "../private";
import CompanyDetails from "../company";
import CompanyDescription from "../company-description";
import CompanyFinancials from "../company-financials";
import CompanyNews from "../company-news";
import CompanyStats from "../company-stats";
import CompanyEarnings from "../company-earnings";
import CompanyPeers from "../company-peers";
import CompanyChart from "../company-chart";
import MyStocks from "../my-stocks";
import config from "../../aws-exports";
import Amplify from "aws-amplify";
Amplify.configure(config);

const App = () => (
  <div>
    {/* <header>
      <Link to="/">Home </Link>
      <Link to="/companies/msft">MSFT</Link>
      <Link to="/companies/aapl">AAPL</Link>
    </header> */}
    <header>
      <div className="logo-container">
        <img height="80px" src="/images/logo/logo.svg" />
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-list__item">
            <a href="/">Home</a>
          </li>{" "}
          <li className="nav-list__item">
            <a href="/about-us">About</a>
          </li>
          <li className="nav-list__item">
            <a href="/mystocks">Portfolio</a>
          </li>
          <li className="nav-list__item">
            <a href="/news">Stock News</a>
          </li>
          <li className="nav-list__item">
            <a href="/signout">Sign Out</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Route
        exact
        path="/companies/:companyId"
        component={() => (
          <div className="main-wrapper">
            <CompanyDetails />
            <CompanyChart />
            <CompanyDescription />
            {/* <CompanyNews /> */}
            <CompanyFinancials />
            <CompanyStats />
            <CompanyEarnings />
            <CompanyPeers />
          </div>
        )}
      />
      <Home />
       <Private />
    </main>
  </div>
);

export default App;
