import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DailyStore from '../components/DailyStore';
import Home from '../components/Home';

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/store" component={DailyStore}/>
            </Switch>
    )
    }
}

export default Routes;
