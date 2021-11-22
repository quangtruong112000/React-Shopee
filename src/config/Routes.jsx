import React from 'react'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Vendor from '../pages/Vendor'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Download from '../components/Download/Download';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/login">
                    <Register />
                </Route>
                <Route exact path="/download">
                    <Download />
                </Route>
                <Route exact path="/vendor">
                    <Vendor />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
