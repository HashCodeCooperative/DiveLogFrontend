import React from 'react';
import { NavbarSticky } from 'uikit-react';
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => {

    let toolbarcolor = '#f7f7f7';
    if (props.modeClasses === 'uk-background-secondary uk-light') {
        toolbarcolor = '#ffc806';
    }

    return(

        <header className={classes.Toolbar} style={{background: toolbarcolor}}>
            
            <DrawerToggle 
                clicked={props.drawerToggleClicked}    
            />
            
            <NavbarSticky options="animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent uk-dark; top: 556;">
                
                <div className='uk-navbar-top'>
                    <NavigationItems 
                        mode='toolbar'
                        authenticated={props.authenticated}
                        diverId={props.diverId}
                        userName={props.userName}
                        modeToggler={props.modeToggler}
                        modeClasses={props.modeClasses}/>
                </div>
            </NavbarSticky>

            <div className={classes.Logo}>
                <Logo/>
            </div>
            
        </header>
    );
};

export default toolbar; 