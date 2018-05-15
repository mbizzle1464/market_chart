import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { getData } from "../../modules/PullStocks";
import { loadCompanyPage } from "../../modules/Home.js";
import { getIexData } from "../../modules/PullStocks.js";

const Home = props => {
  return (
    <div className="widget">
      <h1>Home Page</h1>
      <div className="search-container">
        <input
          type="text"
          className="stock-search"
          id="stock-search"
          defaultValue="input something"
        />
        <button
          className="stock-search-button"
          id="stock-search-button"
          onClick={props.changePage}
        >
          Search
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
