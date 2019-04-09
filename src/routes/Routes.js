import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DailyStore from "../components/DailyStore";
import UpcomingItems from '../components/UpcomingItems';
import Home from "../components/Home";
import News from '../components/News'
import Items from '../components/Items'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={DailyStore} />
        <Route exact path="/upcoming" component={UpcomingItems} />
        <Route exact path="/news" component={News} />
        <Route exact path="/items" component={Items} />
      </Switch>
    );
  }
}

export default Routes;
