import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getIexData,
  getPortfolio,
  getDescriptionPortfolio
} from "../../modules/PullStocks";
import News from "../news";

// I wanted to see if this functionality of Private Route works and it did! This is why the other items are commented out.

const MyStocks = props => {
  // state = {
  //   username: "",
  //   user: {}
  // };
  // componentDidMount() {
  //   Auth.currentAuthenticatedUser().then(user => this.setState({ user }));
  //   Auth.currentUserInfo()
  //     .then(data => {
  //       this.setState({
  //         username: data.username
  //       });
  //     })
  //     .catch(err => console.log("error: ", err));
  // }
  if (!props.awaitingPortfolio) {
    props.getPortfolio(1);
    return <p>no data</p>;
  } else {
    if (!props.receivedPortfolioIex) {
      props.getDescriptionPortfolio(
        props.portfolio[0].stocks.map(stock => {
          return stock.symbol;
        })
      );
      return <div>No Data</div>;
      // props.getIexData("msft", "company");
    } else {
      return (
        <div>
          <div className="stripe" />
          <div className="widget">
            {/* <h1>Welcome, {this.state.username}</h1> */}
            <h1>My Portfolio</h1>
            <div className="search-container" />
          </div>
          <div className="stripe" />
          <div className="widget">
            <div className="company-quick-view_basic widget_content-area">
              <table>
                <thead>
                  <tr>
                    <th>Stock</th>
                    <th>Shares</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {props.portfolio[0].stocks.map(stock => {
                    return (
                      <tr>
                        <td>{stock.symbol}</td>
                        <td>{stock.sharesOwned}</td>
                        <td>{stock.currentPrice}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <News />
          </div>
        </div>
      );
    }
  }
};

/*
const MyStocks = props => {
  //   const currentCompany = props.path.split("/");
  //   if (!props.website) {
  //     props.getIexData(currentCompany[2], "book");
  //     props.getIexData(currentCompany[2], "company");
  //     return <p>No Data</p>;
  //   } else {
  return (
    <div>
      <div className="stripe" />
      <div className="company-quick-view widget">
        <div className="company-quick-view_basic widget_content-area">
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Shares</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MSFT</td>
                <td>24</td>
                <td>187.3</td>
              </tr>
              <tr>
                <td>MSFT</td>
                <td>24</td>
                <td>187.3</td>
              </tr>
              <tr>
                <td>MSFT</td>
                <td>24</td>
                <td>187.3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  //   }
};
*/
const mapStateToProps = state => ({
  awaitingPortfolio: state.PullStocks.awaitingPortfolio,
  path: state.routing.location.pathname,
  portfolio: state.PullStocks.portfolio,
  receivedPortfolioIex: state.PullStocks.receivedPortfolioIex
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPortfolio,
      getDescriptionPortfolio,
      getIexData,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyStocks);