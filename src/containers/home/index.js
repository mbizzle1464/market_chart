import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { getData } from "../../modules/PullStocks";

const Home = props => {
  return (
    <div className="company-quick-view widget">
      <h1>Home Page Not Yet Built</h1>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
