import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIexData } from "../../../modules/PullStocks";
import Company from "../../company";
import { checkSign, setColor } from "../../../helpers/helpers";

const addWatchList = props => {
  return "Watch List Add Modal Goes Here";
};

const mapStateToProps = state => ({
  quote: state.PullStocks.quote,
  path: state.routing.location.pathname,
  modal: state.PullStocks.modal
  // description: state.PullStocks.description,
  // ceo: state.PullStocks.ceo,
  // sector: state.PullStocks.sector,
  // industry: state.PullStocks.industry
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggle,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addWatchList);
