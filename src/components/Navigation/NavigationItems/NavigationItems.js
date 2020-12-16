import React from 'react';
import { NavLink } from 'react-router-dom'
// import classes from './NavigationItems.module.css';

const NavigationItems = ( props ) => {

    let LoginItem = (
        <NavLink onClick={props.closed} to='/login'>
            Login
        </NavLink>
    );

    if (props.authenticated) {
        LoginItem = (
            <NavLink onClick={props.closed} to='/logout'>
                Logout
            </NavLink>
        );
    };
    
    return(
        <ul className={props.classes}>
            <li>
                {LoginItem}
            </li>
            <li>
                <NavLink onClick={props.closed} to='/dives'>
                    Logbook
                </NavLink>
            </li>
            <li>
                <NavLink onClick={props.closed} to='/add'>
                    Add
                </NavLink>
            </li>
        </ul>
    );
};

export default NavigationItems;