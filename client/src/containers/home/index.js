import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { getData } from "../../modules/PullStocks";
import { loadCompanyPage } from "../../modules/Home.js";
import { getIexData } from "../../modules/PullStocks.js";
import Authenticator from "../authenticator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = props => {
  return (
    <div className="widget">
      <h1>Search Companies</h1>
      <div className="search-container">
        <input
          type="text"
          className="stock-search"
          id="stock-search"
          placeholder="MSFT"
        />
        <button
          className="stock-search-button"
          id="stock-search-button"
          onClick={props.changePage}
        >
          <FontAwesomeIcon icon="search" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

function getInputText() {
  const stockSymbol = document.getElementById("stock-search").value;
  getIexData("", "reload");
  return `/companies/${stockSymbol}`;
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push(getInputText())
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
