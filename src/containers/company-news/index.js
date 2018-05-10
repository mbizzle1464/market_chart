import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getNews } from "../../modules/PullStocks";

const News = props => {
  const currentCompany = props.path.split("/");

  if (!props.news) {
    props.getNews(currentCompany[2]);
  }
  return (
    <div className="widget">
      <h1>Company News</h1>
      {console.log(props.news)}
    </div>
  );
};

const mapStateToProps = state => ({
  path: state.routing.location.pathname,
  news: state.PullStocks.news
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getNews,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(News);
