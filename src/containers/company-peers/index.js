import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIexData } from "../../modules/PullStocks";

const Description = props => {
  const currentCompany = props.path.split("/");

  if (!props.peers[0]) {
    props.getIexData(currentCompany[2], "peers");
  }
  return (
    // TODO: Refactor to a map
    // TODO: Add in company name and current price and price
    <div className="widget">
      <h1>Peers</h1>
      <div>{props.peers[0]}</div>
      <div>{props.peers[1]}</div>
      <div>{props.peers[2]}</div>
      <div>{props.peers[3]}</div>
      <div>{props.peers[4]}</div>
      <div>{props.peers[5]}</div>
      <div>{props.peers[6]}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  path: state.routing.location.pathname,
  peers: state.PullStocks.peers
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
