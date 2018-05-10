import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getGeneralData } from "../../modules/PullStocks";

const Description = props => {
  const currentCompany = props.path.split("/");

  if (!props.website) {
    props.getGeneralData(currentCompany[2]);
  }
  return (
    <div className="widget">
      <div className="description">{props.description}</div>
      <div className="ceo">CEO: {props.ceo}</div>
      <div className="sector">Sector: {props.sector}</div>
      <div className="industry">Industry: {props.industry}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  path: state.routing.location.pathname,
  website: state.PullStocks.website,
  description: state.PullStocks.description,
  ceo: state.PullStocks.ceo,
  sector: state.PullStocks.sector,
  industry: state.PullStocks.industry
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getGeneralData,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Description);
