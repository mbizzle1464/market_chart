import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIexData } from "../../../modules/PullStocks";
import Company from "../../company";
import { checkSign, setColor } from "../../../helpers/helpers";
import axios from "axios";

const addStock = props => {
  const handleClick = e => {
    e.preventDefault();
    console.log("Click Works - Add Portfolio");
    console.log(props.symbol);
    // props.addPortfolioData(333, "jared", props.latestPrice, props.symbol);
    let sharesOwned = this.name.value;
    console.log(sharesOwned); 

    axios
      .post(
        `https://marketchart.herokuapp.com:3001/portfolio/testone/${
          props.symbol
        }/${sharesOwned}/200`,
        {
          symbol: props.symbol,
          sharesOwned: sharesOwned,
          currentPrice: props.latestPrice
        }
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <div className="stripe" />
      <div class="widget">
        <h1>How Many Shares Do You Own?</h1>
        <form method="post" onSubmit={e => handleClick(e)}>
          <input ref={input => (this.name = input)} type="text" />
          <button type="submit">Add Shares and Save</button>
        </form>
      </div>
    </React.Fragment>
  );
};
// const addPortfolioData = (sharesOwned, username, lastPrice, symbol) => {
//   axios
//     .post(`http://localhost:3000/portfolio`, {
//       portfolio: {
//         symbol: symbol,
//         sharesOwned: sharesOwned,
//         currentPrice: lastPrice
//       }
//     })
//     .then(function(response) {
//       console.log(response);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// };

const mapStateToProps = state => ({
  quote: state.PullStocks.quote,
  path: state.routing.location.pathname,
  website: state.PullStocks.website,
  symbol: state.PullStocks.symbol,
  username: "jared",
  latestPrice: state.PullStocks.quote.latestPrice
  // description: state.PullStocks.description,
  // ceo: state.PullStocks.ceo,
  // sector: state.PullStocks.sector,
  // industry: state.PullStocks.industry
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getIexData,
      // addPortfolioData,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addStock);
