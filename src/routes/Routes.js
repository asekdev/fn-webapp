import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DailyStore from "../components/DailyStore";
import UpcomingItems from '../components/UpcomingItems';
import Home from "../components/Home";
import News from '../components/News'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={DailyStore} />
        <Route exact path="/upcoming" component={UpcomingItems} />
        <Route exact path="/news" component={News} />
      </Switch>
    );
  }
}

export default Routes;
