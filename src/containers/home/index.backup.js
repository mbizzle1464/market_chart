import React, { Component } from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getData } from "../../modules/GetStocks";

// const Home = props => (
//   <div>
//     <h1>Home</h1>
//     <p>Symbol: {props.test[0]}</p>
//     {console.log(`Props.test: ${props.test[0]}`)}

//     {/* <p>
//       <button onClick={props.getData}>Get Data</button>
//     </p> */}
//     <p>
//       <button onClick={() => props.changePage()}>
//         Go to about page via redux
//       </button>
//     </p>
//   </div>
// );

const Home = props => {
  console.log(props.test[0]);
  if (!props.test[0]) {
    props.getData();
  }
  return (
    <div className="company-quick-view widget">
      <div className="company-quick-view_basic widget_content-area">
        <h3 className="company-quick-view_symbol">{props.test[0]}</h3>
        <div className="company-quick-view_name">
          <a href="http://www.microsoft.com">{props.test[1]}</a>
        </div>
        <div className="company-quick-view_exchange">{props.test[2]}</div>
      </div>
      <div className="company-quick-view_pricing widget_content-area">
        <h2 className="company-quick-view_pricing__last-trade">$96.54 Dummy</h2>
        <div className="company-quick-view_pricing__ticker-change ticker">
          -0.20 (-.20%) Dummy
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  // isDecrementing: state.GetStocks.isDecrementing,
  test: state.GetStocks.test
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getData,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
