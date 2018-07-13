import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store, { history } from "./store";
import App from "./containers/app";
import "semantic-ui-css/semantic.min.css";
import "./bootstrap.css";
import "./index.css";

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* <Router> */}
      <div>
        <App />
      </div>
      {/* </Router> */}
    </ConnectedRouter>
  </Provider>,
  target
);
