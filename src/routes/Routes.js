import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Project from '../components/Project';
import { PathNotFound } from '../components/common'

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/project/:id" component={Project} />
                <Route component={PathNotFound} />
            </Switch>
    )
    }
}

export default Routes;