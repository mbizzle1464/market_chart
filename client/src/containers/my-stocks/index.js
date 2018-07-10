import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIexData, getPortfolio } from "../../modules/PullStocks";
import { checkSign, setColor } from "../../helpers/helpers";
import { Auth } from "aws-amplify";
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
    return (
      <div>
        <div className="widget">
          {/* <h1>Welcome, {this.state.username}</h1> */}
          <h1>
            Testing Should be AAPL: {props.portfolio.portfolio.stocks[0].symbol}
          </h1>
          <div className="search-container" />
        </div>
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
        <div>
          <News />
        </div>
      </div>
    );
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
  portfolio: state.PullStocks.portfolio
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPortfolio,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyStocks);
