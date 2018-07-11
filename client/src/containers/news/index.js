import React from "react";
const axios = require("axios");

class News extends React.Component {
  state = {
    results: []
  };
  componentDidMount() {
    axios.get(`https://api.iextrading.com/1.0/stock/market/news/`).then(res => {
      const results = res.data;
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
                  <h4>{r.headline}</h4>
                  <div>{r.summary}</div>
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
