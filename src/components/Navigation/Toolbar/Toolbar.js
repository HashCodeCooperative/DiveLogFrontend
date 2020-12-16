import React from 'react';
import { NavbarSticky } from 'uikit-react';
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => {

    

    return(

        <header className={classes.Toolbar + ' uk-background-muted'}>
            
            <DrawerToggle 
                clicked={props.drawerToggleClicked}    
            />
            
            <NavbarSticky options="animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent uk-light; top: 556;">
                <div className='uk-navbar-top'>
                    <NavigationItems 
                        classes='uk-navbar-nav'
                        authenticated={props.authenticated}/>
                </div>
            </NavbarSticky>

            <div className={classes.Logo}>
                <Logo/>
            </div>

        </header>
    );
};

export default toolbar; 