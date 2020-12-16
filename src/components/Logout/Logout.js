import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
//import classes from './Logout.module.css';

class Logout extends Component {

    render() {

        this.props.logoutHandler();

        return(
            <Redirect to='/login'/>
        );
    };
}

export default Logout;