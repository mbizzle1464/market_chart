import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { getData } from "../../modules/PullStocks";
import { getIexData } from "../../modules/PullStocks.js";
import News from "../news";
import { withRouter } from "react-router-dom";
import Search from "../search";

const Home = props => {
  return (
    <React.Fragment>
      {/* <div className="stripe" />
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
      </div> */}
      <Search />
      <div>
        <News />
      </div>
    </React.Fragment>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
