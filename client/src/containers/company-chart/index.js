import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIexData } from "../../modules/PullStocks";
import { Line } from "react-chartjs-2";

const Description = props => {
  const currentCompany = props.path.split("/");

  if (props.awaitingState) {
    props.getIexData(currentCompany[2], "chart/6m");
    console.log(props.awaitingState);
    return <p>no data</p>;

  } else {
    console.log(props);

    return (
      <div>
        <div className="stripe" />
        <div className="widget">
          <div className="chart">
            <Line
              data = { props.chart.data }
              options={{
                title: {
                  display: "This is the chart tile",
                  text: `${props.quote.symbol} Close Chart`,
                  fontSize: 25, 
                  responsive: true
                },
                legend: {
                  display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                  },
                  hover: {
                    mode: 'nearest',
                    intersect: true
                  },
                  scales: {
                    xAxes: [{
                      display: true,
                      scaleLabel: {
                        display: true,
                        labelString: 'Date'
                      }
                    }],
                    yAxes: [{
                      display: true,
                      scaleLabel: {
                        display: true,
                        labelString: 'Share Amount in USD $'
                      }
                    }]
                  }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  path: state.routing.location.pathname,
  chart: state.PullStocks.chart,
  quote: state.PullStocks.quote,
  awaitingState: state.PullStocks.awaitingChart
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
