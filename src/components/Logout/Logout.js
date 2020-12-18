import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
//import classes from './Logout.module.css';

class Logout extends Component {

    componentDidMount() {
        this.props.logoutHandler();
    }

    render() {

        return(
            <div>
                <p>you have logged out</p>
                <Redirect to='/login'/>
            </div>
        );
    };
}

export default Logout;