import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import classes from './NavigationItems.module.css';

const NavigationItems = ( props ) => {

    let navItemsClasses = null;
    let linkClasses =[];

    if (props.mode === 'toolbar') {
        navItemsClasses = 'uk-navbar-nav uk-iconnav';
        linkClasses.push(classes.NavigationItem);
        linkClasses.push(classes.DesktopOnly);
    } else
    
    if (props.mode === 'sidebar') {
        navItemsClasses = "uk-nav uk-nav-default";
    }
    
    let LoginItem = (
        <Link onClick={props.closed} to='/login'>
            {props.mode==='sidebar' ? 
                <span>SIGN-IN</span> 
                :
                <span 
                    className={linkClasses.join(' ')}
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
                        className={linkClasses.join(' ')}
                        uk-icon="icon: sign-out"
                        uk-tooltip="sign-out">                     
                    </span>
                }
            </NavLink>
        );
    };

    let userLink = null;
    
    if (props.mode==='sidebar') {
        userLink = <span>USER'S ACCOUNT</span> 

    } else
    { 
        userLink = (
            <div className='uk-flex'>
                <span 
                    className={linkClasses.join(' ')}
                    uk-icon="icon: user"
                    uk-tooltip="user's account">                     
                </span>
                <span 
                    className={linkClasses.join(' ') + ' uk-margin-small-left'}
                    uk-tooltip="user's account">{props.userName}</span>
            </div>
        );
    };
                        

    return(
        <ul className={navItemsClasses}>
            <li>
                {LoginItem}
            </li>
            <li>
                <NavLink onClick={props.closed} to={'/dives/'+props.diverId}>
                    {props.mode==='sidebar' ? 
                        <span>LOGBOOK</span> 
                        :
                        <span 
                            className={linkClasses.join(' ')}
                            uk-icon="icon: database"
                            uk-tooltip="show the logbook">                     
                        </span>
                    }
                </NavLink>
            </li>
            <li>
                <NavLink onClick={props.closed} to={'/add/'+props.diverId}>
                    {props.mode==='sidebar' ? 
                        <span>ADD A DIVE</span> 
                        :
                        <span 
                            className={linkClasses.join(' ')}
                            uk-icon="icon: plus"
                            uk-tooltip="add a dive">                     
                        </span>
                    }
                </NavLink>
            </li>

            <li>
                <NavLink onClick={props.closed} to={'/about'}>
                    {props.mode==='sidebar' ? 
                        <span>ABOUT</span> 
                        :
                        <span 
                            className={linkClasses.join(' ')}
                            uk-icon="icon: info"
                            uk-tooltip="about the application">                     
                        </span>
                    }
                </NavLink>
            </li>

            <li>
                <NavLink onClick={props.closed} to={'/user'}>
                    {userLink}
                </NavLink>
            </li>
        </ul>
    );
};

export default NavigationItems;