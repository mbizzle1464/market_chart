import React from "react";
const axios = require("axios");

class News extends React.Component {
  state = {
    results: []
  };
  componentDidMount() {
    axios.get(`https://api.iextrading.com/1.0/stock/market/news/`).then(res => {
      const results = res.data;
      //console.log(results);
      results.map((r, index) => {
        results[index].headline = results[index].headline.replace(
          "&apos;",
          "'"
        );
      });
      results.map((r, index) => {
        results[index].headline = results[index].headline.replace("&amp;", "&");
      });
      results.map((r, index) => {
        results[index].summary = results[index].summary.replace("&apos;", "'");
      });
      results.map((r, index) => {
        results[index].summary = results[index].summary.replace("&amp;", "&");
      });
      this.setState({
        results
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="stripe" />
        <div className="widget">
          <h1>Market News</h1>
          <div>
            {this.state.results &&
              this.state.results.length > 0 &&
              this.state.results.map(r => (
                <div key={r.url}>
                  <h2>{r.headline}</h2>
                  <p>{r.summary}</p>
                  <div>
                    <a href={r.url} target="blank">
                      {" "}
                      Article
                    </a>
                  </div>
                  <div>Source: {r.source} </div>
                </div>
              ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
