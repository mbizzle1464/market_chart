import React from "react";
import { Route, Switch, Link, withRouter, BrowserRouter as Router } from "react-router-dom";
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
import Header from "../header";

library.add(faSearch);
Amplify.Logger.LOG_LEVEL = "DEBUG";
Amplify.configure(config);

const App = () => (
  <div>
    <Header />
    <main>
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
        <PrivateRoute path="/mystocks" component={MyStocks} />
        <PrivateRoute path="/signout" component={Signout} />
        <Route exact path="/News" component={News} />
      </Switch>

      <Footer />
    </main>
  </div>
);

export default withRouter(App);
