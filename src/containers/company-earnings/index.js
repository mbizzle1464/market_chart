import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIexData } from "../../modules/PullStocks";

const Description = props => {
  const currentCompany = props.path.split("/");

  if (!props.actualEPS) {
    props.getIexData(currentCompany[2], "earnings");
  }
  return (
    <div className="widget">
      <h1>Earnings</h1>
      <div className="key-value">
        <div className="companyName">Earnings Per Share: {props.actualEPS}</div>
        <div className="consensusEPS">consensusEPS: {props.consensusEPS}</div>
        <div className="estimatedEPS">estimatedEPS: {props.estimatedEPS}</div>
        <div className="announceTime">announceTime: {props.announceTime}</div>
        <div className="numberOfEstimates">
          numberOfEstimates: {props.numberOfEstimates}
        </div>
        <div className="EPSSurpriseDollar">
          EPSSurpriseDollar: {props.EPSSurpriseDollar}
        </div>
        <div className="EPSReportDate">
          EPSReportDate: {props.EPSReportDate}
        </div>
        <div className="fiscalPeriod">fiscalPeriod: {props.fiscalPeriod}</div>
        <div className="fiscalEndDate">
          fiscalEndDate: {props.fiscalEndDate}
        </div>
        <div className="yearAgo">yearAgo: {props.yearAgo}</div>
        <div className="yearAgoChangePercent">
          yearAgoChangePercent: {props.yearAgoChangePercent}
        </div>
        <div className="estimatedChangePercent">
          estimatedChangePercent: {props.estimatedChangePercent}
        </div>
        <div className="symbolId">symbolId: {props.symbolId}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  path: state.routing.location.pathname,
  actualEPS: state.PullStocks.actualEPS,
  consensusEPS: state.PullStocks.consensusEPS,
  estimatedEPS: state.PullStocks.estimatedEPS,
  announceTime: state.PullStocks.announceTime,
  numberOfEstimates: state.PullStocks.numberOfEstimates,
  EPSSurpriseDollar: state.PullStocks.EPSSurpriseDollar,
  EPSReportDate: state.PullStocks.EPSReportDate,
  fiscalPeriod: state.PullStocks.fiscalPeriod,
  fiscalEndDate: state.PullStocks.fiscalEndDate,
  yearAgo: state.PullStocks.yearAgo,
  yearAgoChangePercent: state.PullStocks.yearAgoChangePercent,
  estimatedChangePercent: state.PullStocks.estimatedChangePercent,
  symbolId: state.PullStocks.symbolId
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
