import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIexData } from "../../../modules/PullStocks";
import Company from "../../company";
import { checkSign, setColor } from "../../../helpers/helpers";
const addWatchList = props => {
  const currentCompany = "aapl";

  if (!props.website) {
    props.getIexData(currentCompany, "reload");
    props.getIexData(currentCompany, "book");
    props.getIexData(currentCompany, "company");
    return <p>No Data</p>;
  } else {
    return <Company />;
  }
};

const mapStateToProps = state => ({
  quote: state.PullStocks.quote,
  path: state.routing.location.pathname,
  website: state.PullStocks.website
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
