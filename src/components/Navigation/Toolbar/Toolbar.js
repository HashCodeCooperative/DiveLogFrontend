import React from 'react';
import { NavbarSticky, NavbarContainer, Navbar, ListItem, Icon } from 'uikit-react';
import { NavLink } from 'react-router-dom';
import "../../../../node_modules/uikit/dist/js/uikit-icons";
// import Logo from '../../Logo/Logo';
//import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import classes from './Toolbar.module.css';

const toolbar = ( props ) => {

    return(

        <header className={classes.Toolbar + ' uk-background-muted'}>
            
            <DrawerToggle 
                clicked={props.drawerToggleClicked}    
            />
            
            <NavbarSticky options="animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent uk-light; top: 556;">
                <NavbarContainer>
                    <Navbar>
                        <ListItem>
                            <NavLink to='/login'>
                                {props.authenticated ? "Log out" : "Log in"}
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to='/dives'>
                                Logbook
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to='/add'>
                                Add
                            </NavLink>
                        </ListItem>
                    </Navbar>
                </NavbarContainer>
            </NavbarSticky>

        </header>
    );
};

export default toolbar; 