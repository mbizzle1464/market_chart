import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import About from "../about";
import CompanyDetails from "../company";
import CompanyDescription from "../company-description";
import CompanyFinancials from "../company-financials";
import CompanyNews from "../company-news";

const App = () => (
  <div>
    <header>
      <Link to="/">Home </Link>
      <Link to="/companies/msft">MSFT</Link>
      <Link to="/companies/aapl">AAPL</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route
        exact
        path="/companies/:companyId"
        component={() => (
          <div>
            <CompanyDetails />
            <CompanyDescription />
            <CompanyFinancials />
            <CompanyNews />
          </div>
        )}
      />
    </main>
  </div>
);

export default App;
