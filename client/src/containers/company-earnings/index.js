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
    <div className="height-100">
      <div className="stripe" />
      <div className="widget">
        <h1>Earnings</h1>
        <div className="key-value">
          <div className="companyName">
            <div className="financial-label">Earnings Per Share (EPS)</div>
            <div className="financial-data">{props.actualEPS}</div>
          </div>
          <div className="consensusEPS">
            <div className="financial-label">Consensus EPS</div>
            <div className="financial-data">{props.consensusEPS}</div>
          </div>
          <div className="estimatedEPS">
            <div className="financial-label">Estimated EPS</div>
            <div className="financial-data">{props.estimatedEPS}</div>
          </div>
          <div className="announceTime">
            <div className="financial-label">
              Announce Time BTO(Before open), DMT(During trading), AMC(After
              close){" "}
            </div>
            <div className="financial-data">{props.announceTime}</div>
          </div>
          <div className="numberOfEstimates">
            <div className="financial-label">Number Of Estimates </div>
            <div className="financial-data">{props.numberOfEstimates}</div>
          </div>
          <div className="EPSSurpriseDollar">
            <div className="financial-label">EPS Surprise Dollar</div>
            <div className="financial-data">{props.EPSSurpriseDollar}</div>
          </div>
          <div className="EPSReportDate">
            <div className="financial-label">EPS Report Date</div>
            <div className="financial-data">{props.EPSReportDate}</div>
          </div>
          <div className="fiscalPeriod">
            <div className="financial-label">Fiscal Period</div>
            <div className="financial-data">{props.fiscalPeriod}</div>
          </div>
          <div className="fiscalEndDate">
            <div className="financial-label">Fiscal End Date</div>
            <div className="financial-data">{props.fiscalEndDate}</div>
          </div>
          <div className="yearAgo">
            <div className="financial-label">EPS of Quarter a Year Ago</div>
            <div className="financial-data">${props.yearAgo}</div>
          </div>
          <div className="yearAgoChangePercent">
            <div className="financial-label">
              EPS Change of Percentage a Year Ago
            </div>
            <div className="financial-data">{props.yearAgoChangePercent}%</div>
          </div>
          <div className="estimatedChangePercent">
            <div className="financial-label">
              Estimated EPS Change of Percentage{" "}
            </div>
            <div className="financial-data">
              {props.estimatedChangePercent}%{" "}
            </div>
          </div>
          <div className="symbolId">
            <div className="financial-label">IEX Stock Symbol</div>
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
