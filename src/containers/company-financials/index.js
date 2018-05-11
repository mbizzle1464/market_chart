import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIexData } from "../../modules/PullStocks";

const Financials = props => {
  const currentCompany = props.path.split("/");

  if (!props.reportDate) {
    props.getIexData(currentCompany[2], "financials");
  }
  return (
    <div className="widget">
      <h1>Financials</h1>
      <div className="report-date">Reporting Date: {props.reportDate}</div>
      <div className="gross-profit">Gross Profit: {props.grossProfit}</div>
      <div className="operating-revenue">
        Operating Revenue: {props.operatingRevenue}
      </div>
      <div className="operating-income">
        Operating Income: {props.operatingIncome}
      </div>
      <div className="net-income">Net Income: {props.netIncome}</div>
      <div className="operating-income">
        OperatingIncome: {props.operatingIncome}
      </div>
      <div className="researchAndDevelopment">
        R&D {props.researchAndDevelopment}
      </div>
      <div className="operatingExpense">
        Operating Expense: {props.operatingExpense}
      </div>
      <div className="currentAssets">Current Assets: {props.currentAssets}</div>
      <div className="totalAssets">Total Assets: {props.totalAssets}</div>
      <div className="totalLiabilities">
        Total Liabilities: {props.totalLiabilities}
      </div>
      <div className="currentCash">Current Cash: {props.currentCash}</div>
      <div className="currentDebt">Current Debt: {props.currentDebt}</div>
      <div className="shareholderEquity">
        Shareholder Equity: {props.shareholderEquity}
      </div>
      <div className="cashChange">Cash Change: {props.cashChange}</div>
      <div className="cashFlow">Cash Flow: {props.cashFlow}</div>
      <div className="operatingGainsLosses">
        Operating Gains and Losses: {props.operatingGainsLosses}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  path: state.routing.location.pathname,
  reportDate: state.PullStocks.reportDate,
  grossProfit: state.PullStocks.grossProfit,
  operatingRevenue: state.PullStocks.operatingRevenue,
  operatingIncome: state.PullStocks.operatingIncome,
  netIncome: state.PullStocks.netIncome,
  researchAndDevelopment: state.PullStocks.researchAndDevelopment,
  operatingExpense: state.PullStocks.operatingExpense,
  currentAssets: state.PullStocks.currentAssets,
  totalAssets: state.PullStocks.totalAssets,
  totalLiabilities: state.PullStocks.totalLiabilities,
  currentCash: state.PullStocks.currentCash,
  currentDebt: state.PullStocks.currentDebt,
  totalCash: state.PullStocks.totalCash,
  totalDebt: state.PullStocks.totalDebt,
  shareholderEquity: state.PullStocks.shareholderEquity,
  cashChange: state.PullStocks.cashChange,
  cashFlow: state.PullStocks.cashFlow,
  operatingGainsLosses: state.PullStocks.operatingGainsLosses
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getIexData,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Financials);
