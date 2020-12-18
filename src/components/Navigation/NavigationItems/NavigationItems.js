import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import classes from './NavigationItems.module.css';
// import 'uikit/dist/css/uikit.min.css'

const NavigationItems = ( props ) => {

    
    let LoginItem = (
        <Link onClick={props.closed} to='/login'>
            <p className={classes.NavigationItem}>LOGIN</p>
        </Link>
    );

    if (props.authenticated) {
        LoginItem = (
            <NavLink onClick={props.closed} to='/logout'>
                <p className={classes.NavigationItem}>LOGOUT</p>
            </NavLink>
        );
    };

    return(
        <ul className={props.classes}>
            <li>
                {LoginItem}
            </li>
            <li>
                <NavLink onClick={props.closed} to={'/dives/'+props.diverId}>
                    <p className={classes.NavigationItem}>LOGBOOK</p>
                </NavLink>
                
            </li>
            <li>
                <NavLink onClick={props.closed} to={'/add/'+props.diverId}>
                <p className={classes.NavigationItem}>ADD</p>
                </NavLink>
            </li>
        </ul>
    );
};

export default NavigationItems;