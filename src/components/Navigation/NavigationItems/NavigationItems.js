import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import classes from './NavigationItems.module.css';
// import 'uikit/dist/css/uikit.min.css'

const NavigationItems = ( props ) => {

    let navItemsClasses = null;

    if (props.mode === 'toolbar') {
        navItemsClasses = 'uk-navbar-nav uk-iconnav';
    } else
    
    if (props.mode === 'sidebar') {
        navItemsClasses = "uk-nav uk-nav-default";
    }
    
    let LoginItem = (
        <Link onClick={props.closed} to='/login'>
            {props.mode==='sidebar' ? 
                <span>'SIGN-IN'</span> 
                :
                <span 
                    className={classes.NavigationItem}
                    uk-icon="icon: sign-in"
                    uk-tooltip="sign-in">                     
                </span>
            }
        </Link>
    );

    if (props.authenticated) {
        LoginItem = (
            <NavLink onClick={props.closed} to='/logout'>
                {props.mode==='sidebar' ? 
                    <span>SIGN-OUT</span> 
                    :
                    <span 
                        className={classes.NavigationItem}
                        uk-icon="icon: sign-out"
                        uk-tooltip="sign-out">                     
                    </span>
                }
            </NavLink>
        );
    };

    return(
        <ul className={navItemsClasses}>
        {/*  <ul className='uk-nav uk-nav-default uk-navbar-nav'> */}
            <li>
                {LoginItem}
            </li>
            <li>
                <NavLink onClick={props.closed} to={'/dives/'+props.diverId}>
                    {props.mode==='sidebar' ? 
                        <span>LOGBOOK</span> 
                        :
                        <span 
                            className={classes.NavigationItem}
                            uk-icon="icon: list"
                            uk-tooltip="show the logbook">                     
                        </span>
                    }
                </NavLink>
            </li>
            <li>
                <NavLink onClick={props.closed} to={'/add/'+props.diverId}>
                    {props.mode==='sidebar' ? 
                        <span>ADD</span> 
                        :
                        <span 
                            className={classes.NavigationItem}
                            uk-icon="icon: plus"
                            uk-tooltip="add a dive">                     
                        </span>
                    }
                </NavLink>
            </li>
        </ul>
    );
};

export default NavigationItems;