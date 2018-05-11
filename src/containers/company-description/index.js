import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIexData } from "../../modules/PullStocks";

const Description = props => {
  const currentCompany = props.path.split("/");

  if (!props.website) {
    props.getIexData(currentCompany[2], "company");
    props.getIexData(currentCompany[2], "logo");
  }
  return (
    <div className="widget">
      <h1>Description</h1>
      <div className="description">{props.description}</div>
      <div className="ceo">CEO: {props.ceo}</div>
      <div className="sector">Sector: {props.sector}</div>
      <div className="industry">Industry: {props.industry}</div>

      <div className="logo">
        <img src={props.logo} alt="Company Logo" />{" "}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  path: state.routing.location.pathname,
  website: state.PullStocks.website,
  description: state.PullStocks.description,
  ceo: state.PullStocks.ceo,
  sector: state.PullStocks.sector,
  industry: state.PullStocks.industry,
  logo: state.PullStocks.companyLogoUrl
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getIexData,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Description);
