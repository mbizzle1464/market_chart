import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { getData } from "../../modules/PullStocks";
import { getIexData, reload } from "../../modules/PullStocks.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";

const Search = props => {
  const handleClick = () => {
    props.reload();
    props.changePage();
  };
  return (
    <React.Fragment>
      <div className="stripe" />
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
            onClick={handleClick}
          >
            <FontAwesomeIcon icon="search" />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({});

const getInputText = props => {
  const stockSymbol = document.getElementById("stock-search").value;
  reload();
  console.log("does this work?");
  return `/companies/${stockSymbol}`;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getIexData,
      reload,
      changePage: () => push(getInputText())
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
