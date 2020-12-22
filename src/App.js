import '../node_modules/uikit/dist/css/uikit.css';
import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Login from './components/Login/Login';
import withErrorHandler from './hoc/withErrorHandler/withErrorHandler';
import LogADive from './components/LogADive/LogADive';
import Logbook from './components/Logbook/Logbook';
import axios from '../src/axios-backend';
import {Route, Redirect, Switch} from 'react-router-dom';
import Logout from './components/Logout/Logout';
import About from './components/About/About';
import EditDive from './components/EditDive/EditDive';
import UserAccount from './components/UserAccount/UserAccount';

class App extends Component {

  state={
    authenticated: false,
    diverId: null,
    userName: null
  }

  loginHandler = (diverId, userName) => {
    this.setState({authenticated: true, diverId: diverId, userName: userName});
  }

  logoutHandler = () => {
    this.setState({authenticated: false, diverId: null, userName: null});
  }
  
  render() {

    return (
      <Layout 
          authenticated={this.state.authenticated}
          diverId={this.state.diverId}
          userName={this.state.userName}>

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

            {this.state.authenticated ? <Route exact path='/dives/:diverId' component={Logbook}/> : null}
       
            {this.state.authenticated ? <Route exact path='/add/:diverId' component={LogADive}/> : null}
       
            <Route exact path='/about' component={About}/>

            <Route exact path='/edit/:diveId' component={EditDive}/>

            {this.state.authenticated ? <Route exact path='/user'><UserAccount userId={this.state.userId}/></Route> : null}

            <Redirect from='/' to={'/dives/'+this.state.diverId}/>

          </Switch>
      </Layout>
    );
  }
}

export default withErrorHandler(App, axios);
