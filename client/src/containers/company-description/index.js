import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIexData } from "../../modules/PullStocks";

const Description = props => {
  const currentCompany = props.path.split("/");

  if (props.awaitingState) {
    props.getIexData(currentCompany[2], "company");
    props.getIexData(currentCompany[2], "logo");
  }
  return (
    <div className="height-100">
      <div className="stripe" />
      <div className="widget">
        <div className="company-description">
          <div className="logo">
            <img src={props.logo} alt="Company Logo" />{" "}
          </div>
          <div className="description">
            <p className="summary">{props.description}</p>
            <div>
              <div className="ceo">
                <span className="parameter-name">CEO: </span>
                {props.ceo}
              </div>
              <div className="sector">
                <span className="parameter-name">Sector: </span>
                {props.sector}
              </div>
              <div className="industry">
                <span className="parameter-name">Industry: </span>
                {props.industry}
              </div>
            </div>
          </div>
        </div>
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
  logo: state.PullStocks.companyLogoUrl,
  awaitingState: state.PullStocks.awaitingState
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
)(Description);
