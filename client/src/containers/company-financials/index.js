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
    <div>
      <div className="stripe" />
      <div className="widget">
        <h1>Financials</h1>
        <div className="key-value">
          <div className="report-date">
            <div className="financial-label">Reporting Date:</div>
            <div className="financial-data">{props.reportDate}</div>
          </div>
          <div className="gross-profit">
            <div className="financial-label">Gross Profit:</div>
            <div className="financial-data">{props.grossProfit}</div>
          </div>
          <div className="operating-revenue">
            <div className="financial-label">Operating Revenue</div>
            <div className="financial-data">{props.operatingRevenue}</div>
          </div>
          <div className="operating-income">
            <div className="financial-label">Operating Income</div>
            <div className="financial-data">{props.operatingIncome}</div>
          </div>
          <div className="net-income">
            <div className="financial-label">Net Income:</div>
            <div className="financial-data">{props.netIncome}</div>
          </div>
          <div className="operating-income">
            <div className="financial-label">OperatingIncome</div>
            <div className="financial-data">{props.operatingIncome}</div>
          </div>
          <div className="researchAndDevelopment">
            <div className="financial-label">R&D</div>
            <div className="financial-data">{props.researchAndDevelopment}</div>
          </div>
          <div className="operatingExpense">
            <div className="financial-label">Operating Expense</div>
            <div className="financial-data">{props.operatingExpense}</div>
          </div>
          <div className="currentAssets">
            <div className="financial-label">Current Assets</div>
            <div className="financial-data">{props.currentAssets}</div>
          </div>
          <div className="totalAssets">
            <div className="financial-label">Total Assets:</div>
            <div className="financial-data">{props.totalAssets}</div>
          </div>
          <div className="totalLiabilities">
            <div className="financial-label">Total Liabilities</div>
            <div className="financial-data">{props.totalLiabilities}</div>
          </div>
          <div className="currentCash">
            <div className="financial-label">Current Cash:</div>
            <div className="financial-data">{props.currentCash}</div>
          </div>
          <div className="currentDebt">
            <div className="financial-label">Current Debt:</div>
            <div className="financial-data">{props.currentDebt}</div>
          </div>
          <div className="shareholderEquity">
            <div className="financial-label">Shareholder Equity</div>
            <div className="financial-data">{props.shareholderEquity}</div>
          </div>
          <div className="cashChange">
            <div className="financial-label">Cash Change:</div>
            <div className="financial-data">{props.cashChange}</div>
          </div>
          <div className="cashFlow">
            <div className="financial-label">Cash Flow:</div>
            <div className="financial-data">{props.cashFlow}</div>
          </div>
          <div className="operatingGainsLosses">
            <div className="financial-label">Operating Gains and Losses</div>
            <div className="financial-data">{props.operatingGainsLosses}</div>
          </div>
        </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Financials);
