import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIexData } from "../../modules/PullStocks";
import { checkSign, setColor } from "../../helpers/helpers";
const Home = props => {
  const currentCompany = props.path.split("/");

  if (!props.website) {
    props.getIexData(currentCompany[2], "book");
    props.getIexData(currentCompany[2], "company");
    return <p>No Data</p>;
  } else {
    return (
      <div>
        <div className="stripe" />
        <div className="company-quick-view widget">
          <div className="company-quick-view_basic widget_content-area">
            <h3 className="company-quick-view_symbol">{props.quote.symbol}</h3>
            <div className="company-quick-view_name">
              <a href={props.website}>{props.quote.companyName}</a>
            </div>
            <div className="company-quick-view_exchange">
              {props.quote.primaryExchange}
            </div>
          </div>
          <div className="company-quick-view_pricing widget_content-area">
            <h2 className="company-quick-view_pricing__last-trade">
              {props.quote.latestPrice}
              <br />
            </h2>
            <div className={setColor(checkSign(props.quote.change))}>
              {checkSign(props.quote.change)}
              {props.quote.change} ( {checkSign(props.change)}
              {props.quote.changePercent})
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  quote: state.PullStocks.quote,
  path: state.routing.location.pathname,
  website: state.PullStocks.website
  // description: state.PullStocks.description,
  // ceo: state.PullStocks.ceo,
  // sector: state.PullStocks.sector,
  // industry: state.PullStocks.industry
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
)(Home);
