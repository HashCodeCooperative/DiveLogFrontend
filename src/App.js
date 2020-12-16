import '../node_modules/uikit/dist/css/uikit.css';
import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Login from './components/Login/Login';
import withErrorHandler from './hoc/withErrorHandler/withErrorHandler';
import LogADive from './components/LogADive/LogADive';
import Logbook from './components/Logbook/Logbook';
import axios from '../src/axios-backend';
import {Route, Redirect, Switch} from 'react-router-dom';
import '../node_modules/uikit/dist/css/uikit.css';
import Logout from './components/Logout/Logout';

class App extends Component {

  state={
    authenticated: false
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  logoutHandler = () => {
    this.setState({authenticated: false});
  }
  
  render() {
    return (
      <Layout authenticated={this.state.authenticated}>
          <Switch>
            
            <Route exact path='/login'> 
              <Login 
                authenticated={this.state.authenticated}
                loginHandler={this.loginHandler}/>
            </Route>

            <Route exact path='/logout'> 
              <Logout 
                logoutHandler={this.logoutHandler}/>
            </Route>

            <Route exact path='/dives' component={Logbook}/>
       
            <Route exact path='/add' component={LogADive}/>
       
          </Switch>
       
          <Redirect from='/' to='/login'/>
      </Layout>
    );
  }
}

export default withErrorHandler(App, axios);
