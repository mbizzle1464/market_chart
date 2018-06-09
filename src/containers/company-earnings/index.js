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
    <div>
      <div className="stripe" />
      <div className="widget">
        <h1>Earnings</h1>
        <div className="key-value">
          <div className="companyName">
            <div className="financial-label">Earnings Per Share</div>
            <div className="financial-data">{props.actualEPS}</div>
          </div>
          <div className="consensusEPS">
            <div className="financial-label">consensusEPS</div>
            <div className="financial-data">{props.consensusEPS}</div>
          </div>
          <div className="estimatedEPS">
            <div className="financial-label">estimatedEPS</div>
            <div className="financial-data">{props.estimatedEPS}</div>
          </div>
          <div className="announceTime">
            <div className="financial-label">announceTime</div>
            <div className="financial-data">{props.announceTime}</div>
          </div>
          <div className="numberOfEstimates">
            <div className="financial-label">numberOfEstimates </div>
            <div className="financial-data">{props.numberOfEstimates}</div>
          </div>
          <div className="EPSSurpriseDollar">
            <div className="financial-label">EPSSurpriseDollar </div>
            <div className="financial-data">{props.EPSSurpriseDollar}</div>
          </div>
          <div className="EPSReportDate">
            <div className="financial-label">EPSReportDate </div>
            <div className="financial-data">{props.EPSReportDate}</div>
          </div>
          <div className="fiscalPeriod">
            <div className="financial-label">fiscalPeriod</div>
            <div className="financial-data">{props.fiscalPeriod}</div>
          </div>
          <div className="fiscalEndDate">
            <div className="financial-label">fiscalEndDate </div>
            <div className="financial-data">{props.fiscalEndDate}</div>
          </div>
          <div className="yearAgo">
            <div className="financial-label">yearAgo</div>
            <div className="financial-data">{props.yearAgo}</div>
          </div>
          <div className="yearAgoChangePercent">
            <div className="financial-label">yearAgoChangePercent </div>
            <div className="financial-data">{props.yearAgoChangePercent}</div>
          </div>
          <div className="estimatedChangePercent">
            <div className="financial-label">estimatedChangePercent </div>
            <div className="financial-data">{props.estimatedChangePercent}</div>
          </div>
          <div className="symbolId">
            <div className="financial-label">symbolId</div>
            <div className="financial-data">{props.symbolId}</div>
          </div>
        </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Description);
