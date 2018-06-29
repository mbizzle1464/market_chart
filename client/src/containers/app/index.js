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
import config from '../../aws-exports'
import Amplify from 'aws-amplify'
Amplify.configure(config)

const App = () => (
  <div>
    {/* <header>
      <Link to="/">Home </Link>
      <Link to="/companies/msft">MSFT</Link>
      <Link to="/companies/aapl">AAPL</Link>
    </header> */}
    <header>
      <div classname="logo-container">
        <img height="80px" src="/images/logo/logo.svg" />
      </div>
      <nav>
        <ul className="nav-list">
          <li classname="nav-list__item">
            <a href="#">Search</a>
          </li>
          <li classname="nav-list__item">
            <a href="/">Home</a>
          </li>{" "}
          <li classname="nav-list__item">
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/" component={Authenticator} />
      <Route exact path="/" component={News} />
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
    </main>
  </div>
);

export default App;
