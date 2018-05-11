import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIexData } from "../../modules/PullStocks";

const Description = props => {
  const currentCompany = props.path.split("/");

  if (!props.chart[0]) {
    props.getIexData(currentCompany[2], "chart/6m");
    return <p>no data</p>;
  } else {
    return (
      <div className="widget">
        <h1>Chart</h1>
        <div className="date">date: {props.chart[0].date}</div>
        <div className="open">open: {props.chart[0].open}</div>
        <div className="high">high: {props.chart[0].high}</div>
        <div className="low">low: {props.chart[0].low}</div>
        <div className="close">close: {props.chart[0].close}</div>
        <div className="volume">volume: {props.chart[0].volume}</div>
        <div className="unadjustedVolume">
          unadjustedVolume: {props.chart[0].unadjustedVolume}
        </div>
        <div className="change">change: {props.chart[0].change}</div>
        <div className="changePercent">
          changePercent: {props.chart[0].changePercent}
        </div>
        <div className="vwap">vwap: {props.chart[0].vwap}</div>
        <div className="label">label: {props.chart[0].label}</div>
        <div className="changeOverTime">
          changeOverTime: {props.chart[0].changeOverTime}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  path: state.routing.location.pathname,
  chart: state.PullStocks.chart
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
