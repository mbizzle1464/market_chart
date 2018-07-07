import React from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Amplify from "aws-amplify";
import Home from "../home";
import About from "../about";
import News from "../news";
import Authenticator from "../authenticator";
import PrivateRoute from "../private";
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
import Footer from "../footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Signout from "../signout"; 
import ForgotPasswordForm from "../forgotpasswordform";



library.add(faSearch);
Amplify.Logger.LOG_LEVEL = 'DEBUG';
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
          </li>
          <li className="nav-list__item">
            <a href="/about">About</a>
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
    <Router>
        <Switch>
          <Route
        exact
        path="/"
        component={() => (
          <div>
            <Home />
          </div>
        )}
      />
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
          <Route exact path="/about" component={About} />
          <Route exact path="/auth" component={Authenticator} />
          <Route exact path="/forgotpassword" component={ForgotPasswordForm} />
          <PrivateRoute path='/mystocks' component={MyStocks} />
          <PrivateRoute path='/signout' component={Signout} />
          <Route exact path="/News" component={News} />
        </Switch>
    </Router>      
      <Footer />
    </main>
  </div>
);

export default App;
