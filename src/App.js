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
    userName: null,
    modeClasses: 'uk-background-default uk-dark' 
  }

  modeToggleHandler = () => {
    let newModeClasses = 'uk-background-secondary uk-light';
    if (this.state.modeClasses === 'uk-background-secondary uk-light') {
      newModeClasses = 'uk-background-default uk-dark'
    }
    this.setState({modeClasses: newModeClasses});
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
        userName={this.state.userName}
        modeClasses={this.state.modeClasses}
        modeToggler={this.modeToggleHandler}
      >

        <Switch>
          
          <Route 
            exact path='/login'
            render = {(props) => (
              <Login 
                {...props}
                authenticated={this.state.authenticated}
                loginHandler={this.loginHandler}
                modeClasses={this.state.modeClasses}
            />
            )}
          /> 
            
          <Route 
            exact path='/logout'
            render = {(props) => (
              <Logout 
                {...props}
                logoutHandler={this.logoutHandler}
                modeClasses={this.state.modeClasses}/>
            )} 
          />

          {this.state.authenticated ? 
            <Route
              exact path='/dives/:diverId'
              render={(props) => (
                <Logbook 
                  {...props} 
                  modeClasses={this.state.modeClasses} 
                />
              )}
            /> 
          : null}
      
          {this.state.authenticated ? 
            <Route 
              exact path='/add/:diverId'
              render={(props) => (
                <LogADive {...props} modeClasses={this.state.modeClasses}/>
              )}
            />
          : null}
      
          <Route 
            exact path='/about'
            render={(props) => (
              <About {...props} modeClasses={this.state.modeClasses}/>
            )} 
          />
            
          <Route 
            exact path='/edit/:diveId' 
            render={(props) => (
              <EditDive {...props} modeClasses={this.state.modeClasses}/>
            )}
          />
              
          {this.state.authenticated ? 
            <Route 
              exact path='/user'
              render = {(props) => (
                <UserAccount 
                  {...props}
                  userId={this.state.userId}
                  modeClasses={this.state.modeClasses}/>
              )}
            /> 
          : null}

          <Redirect from='/' to={'/dives/'+this.state.diverId}/>

        </Switch>
      </Layout>
    );
  }
}

export default withErrorHandler(App, axios);
