import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getData } from "../../modules/PullStocks";

const Home = props => {
  if (!props.quote[0]) {
    props.getData();
  }
  return (
    <div className="company-quick-view widget">
      <div className="company-quick-view_basic widget_content-area">
        <h3 className="company-quick-view_symbol">{}</h3>
        <div className="company-quick-view_name">
          <a href="http://www.microsoft.com">{props.quote[1]}</a>
        </div>
        <div className="company-quick-view_exchange">{props.quote[2]}</div>
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
  quote: state.PullStocks.quote
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
