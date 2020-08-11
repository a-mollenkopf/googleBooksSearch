import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";
import Navbar from "./Components/Navbar/Navbar";
import Jumbotron from "./Components/Jumbotron/Jumbotron";

function App() {
  return (
    <Router>
      <Navbar />
      <Jumbotron />
      <Switch>
        <Route exact path="/saved" component={Saved} />
        <Route path="/" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
