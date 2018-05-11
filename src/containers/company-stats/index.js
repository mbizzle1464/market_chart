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
    <div className="widget">
      <h1>Key Stats</h1>
      <div className="companyName">companyName: {props.companyName}</div>
      <div className="marketcap">marketcap: {props.marketcap}</div>
      <div className="week52high">week52high: {props.week52high}</div>
      <div className="week52low">week52low: {props.week52low}</div>
      <div className="week52change">week52change: {props.week52change}</div>
      <div className="shortInterest">shortInterest: {props.shortInterest}</div>
      <div className="dividendRate">dividendRate: {props.dividendRate}</div>
      <div className="dividendYield">dividendYield: {props.dividendYield}</div>
      <div className="exDividendDate">
        exDividendDate: {props.exDividendDate}
      </div>
      <div className="latestEPS">latestEPS: {props.latestEPS}</div>
      <div className="latestEPSDate">latestEPSDate: {props.latestEPSDate}</div>
      <div className="sharesOutstanding">
        sharesOutstanding: {props.sharesOutstanding}
      </div>
      <div className="consensusEPS">consensusEPS: {props.consensusEPS}</div>
      <div className="numberOfEstimates">
        numberOfEstimates: {props.numberOfEstimates}
      </div>
      <div className="symbol">symbol: {props.symbol}</div>
      <div className="revenuePerShare">
        revenuePerShare: {props.revenuePerShare}
      </div>
      <div className="peRatioLow">peRatioLow: {props.peRatioLow}</div>
      <div className="returnOnCapital">
        returnOnCapital: {props.returnOnCapital}
      </div>
      <div className="priceToSales">priceToSales: {props.priceToSales}</div>
      <div className="priceToBook">priceToBook: {props.priceToBook}</div>
      <div className="day200MovingAvg">
        day200MovingAvg: {props.day200MovingAvg}
      </div>
      <div className="day50MovingAvg">
        day50MovingAvg: {props.day50MovingAvg}
      </div>
      <div className="institutionPercent">
        institutionPercent: {props.institutionPercent}
      </div>
      <div className="insiderPercent">
        insiderPercent: {props.insiderPercent}
      </div>
      <div className="year5ChangePercent">
        year5ChangePercent: {props.year5ChangePercent}
      </div>
      <div className="year2ChangePercent">
        year2ChangePercent: {props.year2ChangePercent}
      </div>
      <div className="year1ChangePercent">
        year1ChangePercent: {props.year1ChangePercent}
      </div>
      <div className="ytdChangePercent">
        ytdChangePercent: {props.ytdChangePercent}
      </div>
      <div className="month6ChangePercent">
        month6ChangePercent: {props.month6ChangePercent}
      </div>
      <div className="month3ChangePercent">
        month3ChangePercent: {props.month3ChangePercent}
      </div>
      <div className="month1ChangePercent">
        month1ChangePercent: {props.month1ChangePercent}
      </div>
      <div className="day5ChangePercent">
        day5ChangePercent: {props.day5ChangePercent}
      </div>
      <div className="day30ChangePercent">
        day30ChangePercent: {props.day30ChangePercent}
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

export default connect(mapStateToProps, mapDispatchToProps)(Description);
