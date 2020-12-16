import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import { NavLink } from 'react-router-dom'
// import classes from './NavigationItems.module.css';

const NavigationItems = ( props ) => {

    let LoginItem = (
        <NavLink onClick={props.closed} to='/login'>
            Log in
        </NavLink>
    );

    if (props.authenticated) {
        LoginItem = (
            <NavLink onClick={props.closed} to='/logout'>
                Log out
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