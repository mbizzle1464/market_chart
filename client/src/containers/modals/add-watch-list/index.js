import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIexData } from "../../../modules/PullStocks";
import Company from "../../company";
import { checkSign, setColor } from "../../../helpers/helpers";
const addWatchList = props => {
  return (
    <React.Fragment>
      <div className="stripe" />
      <div class="widget">
        <h1>We've added {props.symbol} to your watch list</h1>
        <a href="/watchlist">View my watchlist</a>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  quote: state.PullStocks.quote,
  path: state.routing.location.pathname,
  website: state.PullStocks.website,
  symbol: state.PullStocks.symbol
  // description: state.PullStocks.description,
  // ceo: state.PullStocks.ceo,
  // sector: state.PullStocks.sector,
  // industry: state.PullStocks.industry
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getIexData,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addWatchList);
