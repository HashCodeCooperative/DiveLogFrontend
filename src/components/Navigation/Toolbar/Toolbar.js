import React from 'react';
import { NavbarSticky, NavbarContainer, Navbar, ListItem } from 'uikit-react';
import { NavLink } from 'react-router-dom';
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';

const toolbar = ( props ) => {

    return(

        <header className={classes.Toolbar + ' uk-background-muted'}>
            
            <DrawerToggle 
                clicked={props.drawerToggleClicked}    
            />
            
            <NavbarSticky options="animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent uk-light; top: 556;">
                <div className='uk-navbar-top'>
                    <ul className='uk-navbar-nav'>
                        <li>
                            <NavLink to='/login'>
                                {props.authenticated ? "Log out" : "Log in"}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dives'>
                                Logbook
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/add'>
                                Add
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </NavbarSticky>

            <div className={classes.Logo}>
                <Logo/>
            </div>

        </header>
    );
};

export default toolbar; 