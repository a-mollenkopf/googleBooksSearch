import React, { Component } from "react";
import "./Jumbotron.css";

class Jumbotron extends Component {
  render() {
    return (
        <div className="jumbotron text-center">
            <div className="container text-light">
                <h1 id="jumbotronHeader">Google Books Search</h1>
            </div>
        </div>
    );
  }
}

export default Jumbotron;
