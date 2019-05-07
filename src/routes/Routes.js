import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DailyStore from "../components/DailyStore";
import UpcomingItems from "../components/UpcomingItems";
// import Home from "../components/Home";
import News from "../components/News";
// import Items from "../components/Items";
// import Weapons from "../components/Weapons";
// import UserStats from "../components/UserStats";
// import Signup from "../components/Signup";
import NotFound from "../components/NotFound";
import Contact from "../components/Contact";
import About from "../components/About";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={DailyStore} />
        <Route exact path="/upcoming" component={UpcomingItems} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
