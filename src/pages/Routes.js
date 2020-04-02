'use strict';

import React from 'react';
import { Router, Route, Redirect } from 'react-router';

import App from '../App';



export default (
    <Router>
        <Route component={App}>
            
        <Route exact path="/" component={News} />
        <Route exact path="/AddNews" component={AddNews} />
            
        </Route>
    </Router>
);
