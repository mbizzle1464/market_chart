import React from "react";

class About extends React.Component {
  state = {
    username: '',
    user: {}
  }
  render() {
    return (
       <div className="widget">
    <h1>About</h1>
    <div className="search-container">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate non
        quaerat ipsam nihil adipisci quam, molestias beatae recusandae nam
        voluptas explicabo corrupti alias ipsum, cumque error? Culpa fugiat
        reprehenderit obcaecati?
      </p>
    </div>
  </div>
    )
  }
}

export default About