import axios from "axios";
import io from "socket.io-client";
import numeral from "numeral";
import moment from "moment";
import company from "../containers/company/index";

export const RECEIVE_BOOK = "PullStocks/RECEIVE_BOOK";
export const RECEIVE_SOCKET = "PullStocks/RECEIVE_SOCKET";
export const RECEIVE_DESCRIPTION = "PullStocks/RECEIVE_DESCRIPTION";
export const RECEIVE_FINANCIALS = "PullStocks/RECEIVE_FINANCIALS";
export const RECEIVE_NEWS = "PullStocks/RECEIVE_NEWS";
export const RECEIVE_STATS = "PullStocks/RECEIVE_STATS";
export const RECEIVE_EARNINGS = "PullStocks/RECEIVE_EARNINGS";
export const RECEIVE_LOGO = "PullStocks/RECEIVE_LOGO";
export const RECEIVE_PEERS = "PullStocks/RECEIVE_PEERS";
export const RECEIVE_CHART = "PullStocks/RECEIVE_CHART";
export const RELOAD_COMPANY = "PullStocks/RELOAD_COMPANY";
export const RECEIVE_PORTFOLIO = "PullStocks/RECEIVE_PORTFOLIO";
export const TOGGLE_MODAL = "PullStocks/TOGGLE_MODAL";
export const RECEIVE_PORTFOLIO_DESCRIPTION =
  "PullStocks/RECEIVE_PORTFOLIO_DESCRIPTION";
const initialState = {
  quote: [],
  price: "",
  news: [],
  marketCap: "",
  peers: [],
  website: "",
  awaitingState: true,
  awaitingChart: true,
  awaitingPortfolio: false,
  companyReceived: false,
  currentCompany: "",
  modal: false,
  portfolio: [{}],
  receivedPortfolioIex: false
};

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case RECEIVE_BOOK:
//       return {
//         ...state,
//         quote: "ending quote data"
//       };

//     default:
//       return state;
//   }
// };
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BOOK:
      if (!action.payload) {
        return [...state];
      } else {
        init();
        // let quote = Object.keys(action.payload[0].quote).map(
        //   k => action.payload[0].quote[k]
        // );
        let quote = action.payload[0].quote;
        quote.change = quote.change.toFixed(2);
        quote.latestPrice = numeral(quote.latestPrice).format("$0,0.00");
        // quote.changePercent = (quote.changePercent * 100).toFixed(2);
        quote.changePercent = numeral(quote.changePercent).format("0.00%");

        return {
          ...state,
          quote,
          awaitingState: false
        };
      }
    case RECEIVE_DESCRIPTION:
      if (!action.payload) {
        return [...state];
      } else {
        init();
        let website = action.payload[0].website;
        let description = action.payload[0].description;
        let ceo = action.payload[0].CEO;
        let sector = action.payload[0].sector;
        let industry = action.payload[0].industry;
        let companyReceived = true;

        return {
          ...state,
          website,
          description,
          ceo,
          sector,
          industry,
          companyReceived
        };
      }
    case RECEIVE_PORTFOLIO_DESCRIPTION:
      if (!action.payload) {
        return [...state];
      } else {
        init();
        let test = action.payload[0];
        let portfolio = state.portfolio;
        portfolio[0].stocks.map((stock, index) => {
          stock.currentPrice =
            action.payload[0][stock.symbol].quote.latestPrice;
        });
        let receivedPortfolioIex = true;
        return {
          ...state,
          portfolio,
          receivedPortfolioIex
        };
      }
    case RECEIVE_PORTFOLIO:
      if (!action.payload) {
        return [...state];
      } else {
        init();
        let portfolio = action.payload[0];
        let awaitingPortfolio = true;
        return {
          ...state,
          portfolio,
          awaitingPortfolio
        };
      }
    case RECEIVE_NEWS:
      if (!action.payload) {
        return [...state];
      } else {
        init();
        let news = action.payload[0];
        // news[0].datetime = news[0].datetime.substring(0, 10);
        for (let i = 0; i < news.length; i++) {
          news[i].datetime = moment(
            moment(news[i].datetime.substring(0, 10), "YYYY-MM-DD")
          ).format("MM-DD-YYYY");
        }

        // console.log(news);

        let headline = news[0].headline;
        // console.log("payload: " + JSON.stringify(action.payload[0]));
        return {
          ...state,
          news,
          headline
        };
      }
    case RECEIVE_LOGO:
      if (!action.payload) {
        return [...state];
      } else {
        init();
        let companyLogoUrl = action.payload[0].url;
        return {
          ...state,
          companyLogoUrl
        };
      }
    case RECEIVE_PEERS:
      if (!action.payload) {
        return [...state];
      } else {
        init();
        let peers = action.payload[0];
        return {
          ...state,
          peers
        };
      }
    case RELOAD_COMPANY:
      let companyReceived = false;
      return {
        ...state,
        companyReceived
      };
    case TOGGLE_MODAL:
      let modal = !state.modal;
      return {
        ...state,
        modal
      };
    case RECEIVE_CHART:
      if (!action.payload) {
        return [...state];
      } else {
        init();
        let awaitingChart = false;
        let chart = {};
        chart.data = {};
        chart.data.datasets = [{}];
        chart.data.datasets[0].data = [];
        chart.data.labels = [];
        // chart.data.datasets[0].data = action.payload[0];
        for (let i = 0; i < action.payload[0].length; i++) {
          chart.data.datasets[0].data.push(action.payload[0][i].close);
        }
        for (let k = 0; k < action.payload[0].length; k++) {
          chart.data.labels.push(action.payload[0][k].label);
        }
        return {
          ...state,
          chart,
          awaitingChart
        };
      }
    case RECEIVE_STATS:
      if (!action.payload) {
        return [...state];
      } else {
        // init();
        let marketCap = numeral(action.payload[0].marketcap).format("$0.00a");
        let companyName = action.payload[0].companyName;
        let marketcap = numeral(action.payload[0].marketcap).format("$0.00a");
        let week52high = numeral(action.payload[0].week52high).format("$0.00a");
        let week52low = numeral(action.payload[0].week52low).format("$0.00a");
        let week52change = numeral(action.payload[0].week52change).format(
          "$0.00a"
        );
        let shortInterest = action.payload[0].shortInterest;
        let dividendRate = action.payload[0].dividendRate;
        let dividendYield = action.payload[0].dividendYield;
        let exDividendDate = moment(
          moment(action.payload[0].exDividendDate, "YYYY-MM-DD")
        ).format("MM-DD-YYYY");
        let latestEPS = numeral(action.payload[0].latestEPS).format("$0.00a");
        let latestEPSDate = moment(
          moment(action.payload[0].latestEPSDate, "YYYY-MM-DD")
        ).format("MM-DD-YYYY");
        // let latestEPSDate = action.payload[0].latestEPSDate;
        let sharesOutstanding = action.payload[0].sharesOutstanding;
        let consensusEPS = action.payload[0].consensusEPS;
        let numberOfEstimates = action.payload[0].numberOfEstimates;
        let symbol = action.payload[0].symbol;
        let revenuePerShare = numeral(action.payload[0].revenuePerShare).format(
          "$0.00a"
        );
        let peRatioLow = action.payload[0].peRatioLow;
        let returnOnCapital = action.payload[0].returnOnCapital;
        let priceToSales = action.payload[0].priceToSales;
        let priceToBook = action.payload[0].priceToBook;
        let day200MovingAvg = numeral(action.payload[0].day200MovingAvg).format(
          "$0.00a"
        );
        let day50MovingAvg = numeral(action.payload[0].day50MovingAvg).format(
          "$0.00a"
        );
        let institutionPercent = numeral(
          action.payload[0].institutionPercent / 100
        ).format("0.00%");
        let insiderPercent = numeral(
          action.payload[0].insiderPercent / 100
        ).format("0.00%");
        let year5ChangePercent = numeral(
          action.payload[0].year5ChangePercent / 100
        ).format("0.00%");
        let year2ChangePercent = numeral(
          action.payload[0].year2ChangePercent / 100
        ).format("0.00%");
        let year1ChangePercent = numeral(
          action.payload[0].year1ChangePercent / 100
        ).format("0.00%");
        let ytdChangePercent = numeral(
          action.payload[0].ytdChangePercent / 100
        ).format("0.00%");
        let month6ChangePercent = numeral(
          action.payload[0].month6ChangePercent / 100
        ).format("0.00%");
        let month3ChangePercent = numeral(
          action.payload[0].month3ChangePercent / 100
        ).format("0.00%");
        let month1ChangePercent = numeral(
          action.payload[0].month1ChangePercent / 100
        ).format("0.00%");
        let day5ChangePercent = numeral(
          action.payload[0].day5ChangePercent / 100
        ).format("0.00%");
        let day30ChangePercent = numeral(
          action.payload[0].day30ChangePercent / 100
        ).format("0.00%");
        return {
          ...state,
          marketCap,
          companyName,
          marketcap,
          week52high,
          week52low,
          week52change,
          shortInterest,
          dividendRate,
          dividendYield,
          exDividendDate,
          latestEPS,
          latestEPSDate,
          sharesOutstanding,
          consensusEPS,
          numberOfEstimates,
          symbol,
          revenuePerShare,
          peRatioLow,
          returnOnCapital,
          priceToSales,
          priceToBook,
          day200MovingAvg,
          day50MovingAvg,
          institutionPercent,
          insiderPercent,
          year5ChangePercent,
          year2ChangePercent,
          year1ChangePercent,
          ytdChangePercent,
          month6ChangePercent,
          month3ChangePercent,
          month1ChangePercent,
          day5ChangePercent,
          day30ChangePercent
        };
      }
    case RECEIVE_FINANCIALS:
      if (!action.payload) {
        return [...state];
      } else {
        init();

        let reportDate = moment(
          moment(action.payload[0].financials[0].reportDate, "YYYY-MM-DD")
        ).format("MM-DD-YYYY");
        // let reportDate = action.payload[0].financials[0].reportDate;
        let grossProfit = numeral(
          action.payload[0].financials[0].grossProfit
        ).format("$0,0.");
        let operatingIncome = numeral(
          action.payload[0].financials[0].operatingIncome
        ).format("$0,0");
        let operatingRevenue = numeral(
          action.payload[0].financials[0].operatingRevenue
        ).format("$0,0");
        let netIncome = numeral(
          action.payload[0].financials[0].netIncome
        ).format("$0,0");
        let researchAndDevelopment = numeral(
          action.payload[0].financials[0].researchAndDevelopment
        ).format("$0,0");
        let operatingExpense = numeral(
          action.payload[0].financials[0].operatingExpense
        ).format("$0,0");
        let currentAssets = numeral(
          action.payload[0].financials[0].currentAssets
        ).format("$0,0");
        let totalAssets = numeral(
          action.payload[0].financials[0].totalAssets
        ).format("$0,0");
        let totalLiabilities = numeral(
          action.payload[0].financials[0].totalLiabilities
        ).format("$0,0");
        let currentCash = numeral(
          action.payload[0].financials[0].currentCash
        ).format("$0,0");
        let currentDebt = numeral(
          action.payload[0].financials[0].currentDebt
        ).format("$0,0");
        let totalCash = numeral(
          action.payload[0].financials[0].totalCash
        ).format("$0,0");
        let totalDebt = numeral(
          action.payload[0].financials[0].totalDebt
        ).format("$0,0");
        let shareholderEquity = numeral(
          action.payload[0].financials[0].shareholderEquity
        ).format("$0,0");
        let cashChange = numeral(
          action.payload[0].financials[0].cashChange
        ).format("$0,0");
        let cashFlow = numeral(action.payload[0].financials[0].cashFlow).format(
          "$0,0"
        );
        let operatingGainsLosses = numeral(
          action.payload[0].financials[0].operatingGainsLosses
        ).format("$0,0");
        return {
          ...state,
          reportDate,
          grossProfit,
          operatingIncome,
          operatingRevenue,
          netIncome,
          researchAndDevelopment,
          operatingExpense,
          currentAssets,
          totalAssets,
          totalLiabilities,
          currentCash,
          currentDebt,
          totalCash,
          totalDebt,
          shareholderEquity,
          cashChange,
          cashFlow,
          operatingGainsLosses
        };
      }
    case RECEIVE_EARNINGS:
      if (!action.payload) {
        return [...state];
      } else {
        init();
        let actualEPS = numeral(action.payload[0].earnings[0].actualEPS).format(
          "$0.00a"
        );
        let consensusEPS = numeral(
          action.payload[0].earnings[0].consensusEPS
        ).format("$0.00a");
        let estimatedEPS = numeral(
          action.payload[0].earnings[0].estimatedEPS
        ).format("$0.00a");
        let announceTime = action.payload[0].earnings[0].announceTime;
        let numberOfEstimates = action.payload[0].earnings[0].numberOfEstimates;
        let EPSSurpriseDollar = numeral(
          action.payload[0].earnings[0].EPSSurpriseDollar
        ).format("$0.00a");
        let EPSReportDate = moment(
          moment(action.payload[0].earnings[0].EPSReportDate, "YYYY-MM-DD")
        ).format("MM-DD-YYYY");
        // let EPSReportDate = action.payload[0].earnings[0].EPSReportDate;
        let fiscalPeriod = action.payload[0].earnings[0].fiscalPeriod;
        let fiscalEndDate = action.payload[0].earnings[0].fiscalEndDate;
        let yearAgo = action.payload[0].earnings[0].yearAgo;
        // let yearAgoChangePercent =
        //   action.payload[0].earnings[0].yearAgoChangePercent;
        let yearAgoChangePercent = numeral(
          action.payload[0].earnings[0].yearAgoChangePercent
        ).format("0.00");

        let estimatedChangePercent = numeral(
          action.payload[0].earnings[0].estimatedChangePercent
        ).format("0.00");
        let symbolId = action.payload[0].earnings[0].symbolId;

        return {
          ...state,
          actualEPS,
          consensusEPS,
          estimatedEPS,
          announceTime,
          numberOfEstimates,
          EPSSurpriseDollar,
          EPSReportDate,
          fiscalPeriod,
          fiscalEndDate,
          yearAgo,
          yearAgoChangePercent,
          estimatedChangePercent,
          symbolId
        };
      }
    default:
      return state;
  }
};

const url = `https://api.iextrading.com/1.0/stock/`;

export const getIexData = (currentCompany, requestType) => async dispatch => {
  const res = await axios.get(`${url}${currentCompany}/${requestType}`);
  switch (requestType) {
    // case "reload":
    //   dispatch({
    //     type: RELOAD_COMPANY,
    //     payload: {
    //       test: "payload"
    //     }
    //   });
    //   break;
    case "book":
      dispatch({
        type: RECEIVE_BOOK,
        payload: [res.data]
      });
      break;
    case "company":
      dispatch({
        type: RECEIVE_DESCRIPTION,
        payload: [res.data]
      });
      break;
    case "financials":
      dispatch({
        type: RECEIVE_FINANCIALS,
        payload: [res.data]
      });
      break;
    case "news":
      dispatch({
        type: RECEIVE_NEWS,
        payload: [res.data]
      });
      break;
    case "stats":
      dispatch({
        type: RECEIVE_STATS,
        payload: [res.data]
      });
      break;
    case "earnings":
      dispatch({
        type: RECEIVE_EARNINGS,
        payload: [res.data]
      });
      break;
    case "logo":
      dispatch({
        type: RECEIVE_LOGO,
        payload: [res.data]
      });
      break;
    case "peers":
      dispatch({
        type: RECEIVE_PEERS,
        payload: [res.data]
      });
      break;
    case "chart/6m":
      dispatch({
        type: RECEIVE_CHART,
        payload: [res.data]
      });
      break;
  }
};

export const reload = () => dispatch => {
  dispatch({
    type: RELOAD_COMPANY
  });
};

export const toggle = () => dispatch => {
  dispatch({
    type: TOGGLE_MODAL
  });
};

export const getDescriptionPortfolio = symbols => async dispatch => {
  const response = await axios.get(
    `${url}market/batch?symbols=${symbols}&types=quote,news,chart&range=1m&last=5`
  );
  dispatch({
    type: RECEIVE_PORTFOLIO_DESCRIPTION,
    payload: [response.data]
  });
};

// For future websocket use.  Not fully wired up yet.  Do not delete this code without removing the middleware.
const socket = io("https://ws-api.iextrading.com/1.0/tops");

export const init = currentCompany => dispatch => {
  socket.on("message", payload => dispatch({ type: RECEIVE_SOCKET, payload }));
};

export const emit = (type, payload) => socket.emit("subscribe", "aapl");

export const getPortfolio = user_id => async dispatch => {
  const res = await axios.get(`http://localhost:3001/testone`);
  dispatch({
    type: RECEIVE_PORTFOLIO,
    payload: [res.data]
  });
};
