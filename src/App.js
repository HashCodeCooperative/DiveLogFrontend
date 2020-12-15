import '../node_modules/uikit/dist/css/uikit.css';
import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Login from './components/Login/Login';
import axios from '../src/axios-backend';
import {Route, Redirect, Switch} from 'react-router-dom';

import withErrorHandler from './hoc/withErrorHandler/withErrorHandler';
import LogADive from './components/LogADive/LogADive';
import Logbook from './components/Logbook/Logbook';
import '../node_modules/uikit/dist/css/uikit.css';

class App extends Component {

  state={
    authenticated: false
  }
  
  render() {
    return (
      <Layout>
          <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/dives' component={Logbook}/>
            <Route exact path='/add' component={LogADive}/>
          </Switch>
          <Redirect from='/' to='/login'/>
      </Layout>
    );
  }
}

export default withErrorHandler(App, axios);
