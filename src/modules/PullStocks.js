import axios from "axios";
import io from "socket.io-client";
import numeral from "numeral";
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

const initialState = {
  quote: [],
  price: "",
  news: [],
  marketCap: "",
  peers: [],
  chart: [],
  website: ""
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
          quote
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

        return {
          ...state,
          website,
          description,
          ceo,
          sector,
          industry
        };
      }
    case RECEIVE_NEWS:
      if (!action.payload) {
        return [...state];
      } else {
        init();
        let news = action.payload[0];

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
        console.log(peers);
        return {
          ...state,
          peers
        };
      }
    case RECEIVE_CHART:
      if (!action.payload) {
        return [...state];
      } else {
        init();
        let chart = action.payload[0];
        console.log(chart);
        return {
          ...state,
          chart
        };
      }
    case RECEIVE_STATS:
      if (!action.payload) {
        return [...state];
      } else {
        init();

        let marketCap = action.payload[0].marketcap;

        let companyName = action.payload[0].companyName;
        let marketcap = action.payload[0].marketcap;
        let week52high = action.payload[0].week52high;
        let week52low = action.payload[0].week52low;
        let week52change = action.payload[0].week52change;
        let shortInterest = action.payload[0].shortInterest;
        let dividendRate = action.payload[0].dividendRate;
        let dividendYield = action.payload[0].dividendYield;
        let exDividendDate = action.payload[0].exDividendDate;
        let latestEPS = action.payload[0].latestEPS;
        let latestEPSDate = action.payload[0].latestEPSDate;
        let sharesOutstanding = action.payload[0].sharesOutstanding;
        let consensusEPS = action.payload[0].consensusEPS;
        let numberOfEstimates = action.payload[0].numberOfEstimates;
        let symbol = action.payload[0].symbol;
        let revenuePerShare = action.payload[0].revenuePerShare;
        let peRatioLow = action.payload[0].peRatioLow;
        let returnOnCapital = action.payload[0].returnOnCapital;
        let priceToSales = action.payload[0].priceToSales;
        let priceToBook = action.payload[0].priceToBook;
        let day200MovingAvg = action.payload[0].day200MovingAvg;
        let day50MovingAvg = action.payload[0].day50MovingAvg;
        let institutionPercent = action.payload[0].institutionPercent;
        let insiderPercent = action.payload[0].insiderPercent;
        let year5ChangePercent = action.payload[0].year5ChangePercent;
        let year2ChangePercent = action.payload[0].year2ChangePercent;
        let year1ChangePercent = action.payload[0].year1ChangePercent;
        let ytdChangePercent = action.payload[0].ytdChangePercent;
        let month6ChangePercent = action.payload[0].month6ChangePercent;
        let month3ChangePercent = action.payload[0].month3ChangePercent;
        let month1ChangePercent = action.payload[0].month1ChangePercent;
        let day5ChangePercent = action.payload[0].day5ChangePercent;
        let day30ChangePercent = action.payload[0].day30ChangePercent;
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

        let reportDate = action.payload[0].financials[0].reportDate;
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
        let shareholderEquity =
          action.payload[0].financials[0].shareholderEquity;
        let cashChange = action.payload[0].financials[0].cashChange;
        let cashFlow = action.payload[0].financials[0].cashFlow;
        let operatingGainsLosses =
          action.payload[0].financials.operatingGainsLosses;
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
        let actualEPS = action.payload[0].earnings[0].actualEPS;
        let consensusEPS = action.payload[0].earnings[0].consensusEPS;
        let estimatedEPS = action.payload[0].earnings[0].estimatedEPS;
        let announceTime = action.payload[0].earnings[0].announceTime;
        let numberOfEstimates = action.payload[0].earnings[0].numberOfEstimates;
        let EPSSurpriseDollar = action.payload[0].earnings[0].EPSSurpriseDollar;
        let EPSReportDate = action.payload[0].earnings[0].EPSReportDate;
        let fiscalPeriod = action.payload[0].earnings[0].fiscalPeriod;
        let fiscalEndDate = action.payload[0].earnings[0].fiscalEndDate;
        let yearAgo = action.payload[0].earnings[0].yearAgo;
        let yearAgoChangePercent =
          action.payload[0].earnings[0].yearAgoChangePercent;
        let estimatedChangePercent =
          action.payload[0].earnings[0].estimatedChangePercent;
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

// For future websocket use.  Not fully wired up yet.  Do not delete this code without removing the middleware.
const socket = io("https://ws-api.iextrading.com/1.0/tops");

export const init = currentCompany => dispatch => {
  socket.on("message", payload => dispatch({ type: RECEIVE_SOCKET, payload }));
};

export const emit = (type, payload) => socket.emit("subscribe", "aapl");
