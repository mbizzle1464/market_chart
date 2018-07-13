import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Amplify from "aws-amplify";
import Home from "../home";
import About from "../about";
import News from "../news";
import Authenticator from "../authenticator";
import PrivateRoute from "../private";
import CompanyDetails from "../company";
import CompanyDescription from "../company-description";
import CompanyFinancials from "../company-financials";
import CompanyStats from "../company-stats";
import CompanyEarnings from "../company-earnings";
import CompanyPeers from "../company-peers";
import CompanyChart from "../company-chart";
import MyStocks from "../my-stocks";
import config from "../../aws-exports";
import Footer from "../footer";
import Terms from "../terms";
import PrivacyPolicy from "../privacypolicy";
import ContactUs from "../contactus";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Signout from "../signout";
import ForgotPasswordForm from "../forgotpasswordform";
import Header from "../header";
import addWatchList from "../modals/add-watch-list";
import addStock from "../modals/add-portfolio";

library.add(faSearch);
//Amplify.Logger.LOG_LEVEL = "DEBUG";
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
        <Route path="/temporary" component={MyStocks} />
        <Route exact path="/News" component={News} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/addtowatchlist" component={addWatchList} />
        <Route exact path="/addstock" component={addStock} />
      </Switch>

      <Footer />
    </main>
  </div>
);

export default withRouter(App);
