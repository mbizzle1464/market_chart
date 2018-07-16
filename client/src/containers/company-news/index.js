import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIexData } from "../../modules/PullStocks";
// import { showNews } from "../../helpers/helpers";

const News = props => {
  const currentCompany = props.path.split("/");
  if (!props.news[0]) {
    props.getIexData(currentCompany[2], "news");
    return <p>no data</p>;
  } else {
    return (
      <div className="height-100">
        <div className="stripe" />
        <div className="widget news">
          <h1>News</h1>
          <div className="news-story-wrapper">
            <div className="headline">
              {" "}
              <h2>{props.news[0].headline}</h2>
            </div>
            <div className="datetime">
              {props.news[0].datetime} - {props.news[0].source}
            </div>
            <div className="summary">
              {props.news[0].summary}{" "}
              <a href={props.news[0].url}>Read Article</a>
            </div>
          </div>
          <hr />
          <div className="news-story-wrapper">
            <div className="headline">
              {" "}
              <h2>{props.news[1].headline}</h2>
            </div>
            <div className="datetime">
              {props.news[1].datetime} - {props.news[1].source}
            </div>
            <div className="summary">
              {props.news[1].summary}{" "}
              <a href={props.news[1].url}>Read Article</a>
            </div>
          </div>
          <hr />
          <div className="news-story-wrapper">
            <div className="headline">
              {" "}
              <h2>{props.news[2].headline}</h2>
            </div>
            <div className="datetime">
              {props.news[2].datetime} - {props.news[2].source}
            </div>
            <div className="summary">
              {props.news[2].summary}{" "}
              <a href={props.news[2].url}>Read Article</a>
            </div>
          </div>
          <hr />
          <div className="news-story-wrapper">
            <div className="headline">
              {" "}
              <h2>{props.news[3].headline}</h2>
            </div>
            <div className="datetime">
              {props.news[3].datetime} - {props.news[3].source}
            </div>
            <div className="summary">
              {props.news[3].summary}
              <a href={props.news[3].url}>Read Article</a>
            </div>
          </div>

          {/* <h1>{props.news[0]}</h1>
        {console.log(JSON.stringify(props.news))} */}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  news: state.PullStocks.news,
  path: state.routing.location.pathname,
  headline: state.PullStocks.headline
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getIexData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
