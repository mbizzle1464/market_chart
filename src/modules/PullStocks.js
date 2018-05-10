import axios from "axios";
import io from "socket.io-client";
export const RECEIVE_BOOK = "PullStocks/RECEIVE_BOOK";
export const RECEIVE_SOCKET = "PullStocks/RECEIVE_SOCKET";
export const RECEIVE_GENERAL = "PullStocks/RECEIVE_GENERAL";
export const RECEIVE_FINANCIALS = "PullStocks/RECEIVE_FINANCIALS";
export const RECEIVE_NEWS = "PullStocks/RECEIVE_NEWS";

const initialState = {
  quote: [],
  price: ""
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
        let quote = Object.keys(action.payload[0].quote).map(
          k => action.payload[0].quote[k]
        );

        return {
          ...state,
          quote
        };
      }
    case RECEIVE_GENERAL:
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
        return {
          ...state,
          news
        };
      }
    case RECEIVE_FINANCIALS:
      if (!action.payload) {
        return [...state];
      } else {
        init();

        let reportDate = action.payload[0].financials[0].reportDate;
        let grossProfit = action.payload[0].financials[0].grossProfit;
        let operatingIncome = action.payload[0].financials[0].operatingIncome;
        let operatingRevenue = action.payload[0].financials[0].operatingRevenue;
        let netIncome = action.payload[0].financials[0].netIncome;
        let researchAndDevelopment =
          action.payload[0].financials[0].researchAndDevelopment;
        let operatingExpense = action.payload[0].financials[0].operatingExpense;
        let currentAssets = action.payload[0].financials[0].currentAssets;
        let totalAssets = action.payload[0].financials[0].totalAssets;
        let totalLiabilities = action.payload[0].financials[0].totalLiabilities;
        let currentCash = action.payload[0].financials[0].currentCash;
        let currentDebt = action.payload[0].financials[0].currentDebt;
        let totalCash = action.payload[0].financials[0].totalCash;
        let totalDebt = action.payload[0].financials[0].totalDebt;
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

    default:
      return state;
  }
};

// export const getData = () => {
//   return dispatch => {
//     dispatch({
//       type: RECEIVE_BOOK
//     });
//   };
// };

export const getData = currentCompany => async dispatch => {
  const res = await axios.get(
    `https://api.iextrading.com/1.0/stock/${currentCompany}/book`
  );
  // console.log(res.data);
  dispatch({
    type: RECEIVE_BOOK,
    payload: [res.data]
  });
};
export const getGeneralData = currentCompany => async dispatch => {
  const res = await axios.get(
    `https://api.iextrading.com/1.0/stock/${currentCompany}/company`
  );
  // console.log(res.data);
  dispatch({
    type: RECEIVE_GENERAL,
    payload: [res.data]
  });
};
export const getFinancialsData = currentCompany => async dispatch => {
  const res = await axios.get(
    `https://api.iextrading.com/1.0/stock/${currentCompany}/financials`
  );
  // console.log(res.data);
  dispatch({
    type: RECEIVE_FINANCIALS,
    payload: [res.data]
  });
};
export const getNews = currentCompany => async dispatch => {
  const res = await axios.get(
    `https://api.iextrading.com/1.0/stock/${currentCompany}/news`
  );
  // console.log(res.data);
  dispatch({
    type: RECEIVE_NEWS,
    payload: [res.data]
  });
};

const socket = io("https://ws-api.iextrading.com/1.0/tops");

export const init = currentCompany => dispatch => {
  socket.on("message", payload => dispatch({ type: RECEIVE_SOCKET, payload }));
};

export const emit = (type, payload) => socket.emit("subscribe", "aapl");
