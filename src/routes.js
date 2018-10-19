import React from 'react';
import {Switch, Route} from 'react-router-dom';
import DashBoard from './components/DashBoard/DashBoard'
import Form from './components/Form/Form'

export default (
    <Switch>
        <Route component={ DashBoard } path="/dashboard" />
        <Route component={ Form } path="/form"  />
    </Switch>
)


