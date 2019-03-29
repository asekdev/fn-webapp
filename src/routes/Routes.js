import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DailyStore from '../components/DailyStore';

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={DailyStore} />
                {/* <Route exact path="/project/:id" component={Project} /> */}
                {/* <Route component={PathNotFound} /> */}
            </Switch>
        )
    }
}

export default Routes;