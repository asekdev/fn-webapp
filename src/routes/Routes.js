import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DailyStore from "../components/DailyStore";
import UpcomingItems from '../components/UpcomingItems';
import Home from "../components/Home";
import News from '../components/News'
import Items from '../components/Items'
import Weapons from "../components/Weapons";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={DailyStore} />
        <Route exact path="/upcoming" component={UpcomingItems} />
        <Route exact path="/news" component={News} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/items/weapons" component={Weapons} />
      </Switch>
    );
  }
}

export default Routes;
