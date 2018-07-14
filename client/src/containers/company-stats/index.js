import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIexData } from "../../modules/PullStocks";

const Description = props => {
  const currentCompany = props.path.split("/");

  if (!props.marketCap) {
    props.getIexData(currentCompany[2], "stats");
  }
  return (
    <div className="height-100">
      <div className="stripe" />
      <div className="widget">
        <h1>Key Stats</h1>
        <div className="key-value">
          <div className="companyName">
            <div className="financial-label">Company Name</div>
            <div className="financial-data">{props.companyName}</div>
          </div>
          <div className="marketcap">
            <div className="financial-label">Market Cap</div>
            <div className="financial-data">{props.marketcap}</div>
          </div>
          <div className="week52high">
            <div className="financial-label">52 Week High</div>
            <div className="financial-data">{props.week52high}</div>
          </div>
          <div className="week52low">
            <div className="financial-label">52 Week Low</div>
            <div className="financial-data">{props.week52low}</div>
          </div>
          <div className="week52change">
            <div className="financial-label">52 Week Change</div>
            <div className="financial-data">{props.week52change}</div>
          </div>
          <div className="shortInterest">
            <div className="financial-label">Short Interest</div>
            <div className="financial-data">{props.shortInterest}</div>
          </div>
          <div className="dividendRate">
            <div className="financial-label">Dividend Rate</div>
            <div className="financial-data">{props.dividendRate}</div>
          </div>
          <div className="dividendYield">
            <div className="financial-label">Dividend Yield</div>
            <div className="financial-data">{props.dividendYield}</div>
          </div>
          <div className="exDividendDate">
            <div className="financial-label">Ex-Dividend Date</div>
            <div className="financial-data">{props.exDividendDate}</div>
          </div>
          <div className="latestEPS">
            <div className="financial-label">
              Latest Earn Profit Share (EPS)
            </div>
            <div className="financial-data">{props.latestEPS}</div>
          </div>
          <div className="latestEPSDate">
            <div className="financial-label">Latest EPS Date</div>
            <div className="financial-data">{props.latestEPSDate}</div>
          </div>
          <div className="sharesOutstanding">
            <div className="financial-label">Shares Outstanding</div>
            <div className="financial-data">{props.sharesOutstanding}</div>
          </div>
          <div className="consensusEPS">
            <div className="financial-label">Consensus EPS</div>
            <div className="financial-data">{props.consensusEPS}</div>
          </div>
          <div className="numberOfEstimates">
            <div className="financial-label">Number of Estimates</div>
            <div className="financial-data">{props.numberOfEstimates}</div>
          </div>
          <div className="symbol">
            <div className="financial-label">Symbol</div>
            <div className="financial-data">{props.symbol}</div>
          </div>
          <div className="revenuePerShare">
            <div className="financial-label">Revenue Per Shares</div>
            <div className="financial-data">{props.revenuePerShare}</div>
          </div>
          <div className="peRatioLow">
            <div className="financial-label">Price Earning Ratio</div>
            <div className="financial-data">{props.peRatioLow}</div>
          </div>
          <div className="returnOnCapital">
            <div className="financial-label">Return on Capital</div>
            <div className="financial-data">{props.returnOnCapital}</div>
          </div>
          <div className="priceToSales">
            <div className="financial-label">Price to Sales Ratio</div>
            <div className="financial-data">{props.priceToSales}</div>
          </div>
          <div className="priceToBook">
            <div className="financial-label">Price to Book Ratio</div>
            <div className="financial-data">{props.priceToBook}</div>
          </div>
          <div className="day200MovingAvg">
            <div className="financial-label">200 Day Moving Average</div>
            <div className="financial-data">{props.day200MovingAvg}</div>
          </div>
          <div className="day50MovingAvg">
            <div className="financial-label">50 Day Moving Average</div>
            <div className="financial-data">{props.day50MovingAvg}</div>
          </div>
          <div className="institutionPercent">
            <div className="financial-label"> Institution Percent</div>
            <div className="financial-data">{props.institutionPercent}</div>
          </div>
          <div className="insiderPercent">
            <div className="financial-label">Insider Percent</div>
            <div className="financial-data">{props.insiderPercent}</div>
          </div>
          <div className="year5ChangePercent">
            <div className="financial-label">Year 5 Percent Change</div>
            <div className="financial-data">{props.year5ChangePercent}</div>
          </div>
          <div className="year2ChangePercent">
            <div className="financial-label">Year 2 Percent Change</div>
            <div className="financial-data">{props.year2ChangePercent}</div>
          </div>
          <div className="year1ChangePercent">
            <div className="financial-label">Year 1 Percent Change</div>
            <div className="financial-data">{props.year1ChangePercent}</div>
          </div>
          <div className="ytdChangePercent">
            <div className="financial-label">Year To Date Change</div>
            <div className="financial-data">{props.ytdChangePercent}</div>
          </div>
          <div className="month6ChangePercent">
            <div className="financial-label">6 Month Percent Change</div>
            <div className="financial-data">{props.month6ChangePercent}</div>
          </div>
          <div className="month3ChangePercent">
            <div className="financial-label">3 Month Percent Change</div>
            <div className="financial-data">{props.month3ChangePercent}</div>
          </div>
          <div className="month1ChangePercent">
            <div className="financial-label">1 Month Percent Change</div>
            <div className="financial-data">{props.month1ChangePercent}</div>
          </div>
          <div className="day5ChangePercent">
            <div className="financial-label">5 Day Percent Change</div>
            <div className="financial-data">{props.day5ChangePercent}</div>
          </div>
          <div className="day30ChangePercent">
            <div className="financial-label">30 Day Percent Change</div>
            <div className="financial-data">{props.day30ChangePercent}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  path: state.routing.location.pathname,
  marketCap: state.PullStocks.marketCap,
  companyName: state.PullStocks.companyName,
  marketcap: state.PullStocks.marketcap,
  week52high: state.PullStocks.week52high,
  week52low: state.PullStocks.week52low,
  week52change: state.PullStocks.week52change,
  shortInterest: state.PullStocks.shortInterest,
  dividendRate: state.PullStocks.dividendRate,
  dividendYield: state.PullStocks.dividendYield,
  exDividendDate: state.PullStocks.exDividendDate,
  latestEPS: state.PullStocks.latestEPS,
  latestEPSDate: state.PullStocks.latestEPSDate,
  sharesOutstanding: state.PullStocks.sharesOutstanding,
  consensusEPS: state.PullStocks.consensusEPS,
  numberOfEstimates: state.PullStocks.numberOfEstimates,
  symbol: state.PullStocks.symbol,
  revenuePerShare: state.PullStocks.revenuePerShare,
  peRatioLow: state.PullStocks.peRatioLow,
  returnOnCapital: state.PullStocks.returnOnCapital,
  priceToSales: state.PullStocks.priceToSales,
  priceToBook: state.PullStocks.priceToBook,
  day200MovingAvg: state.PullStocks.day200MovingAvg,
  day50MovingAvg: state.PullStocks.day50MovingAvg,
  institutionPercent: state.PullStocks.institutionPercent,
  insiderPercent: state.PullStocks.insiderPercent,
  year5ChangePercent: state.PullStocks.year5ChangePercent,
  year2ChangePercent: state.PullStocks.year2ChangePercent,
  year1ChangePercent: state.PullStocks.year1ChangePercent,
  ytdChangePercent: state.PullStocks.ytdChangePercent,
  month6ChangePercent: state.PullStocks.month6ChangePercent,
  month3ChangePercent: state.PullStocks.month3ChangePercent,
  month1ChangePercent: state.PullStocks.month1ChangePercent,
  day5ChangePercent: state.PullStocks.day5ChangePercent,
  day30ChangePercent: state.PullStocks.day30ChangePercent
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
