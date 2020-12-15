import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";
import classes from './SideDrawer.module.css';

const sideDrawer = ( props ) => {

    const sideDrawerClasses = [classes.SideDrawer];
    if (props.open) {
        sideDrawerClasses.push(classes.Open);
    }
    else {
        sideDrawerClasses.push(classes.Close);
    }
    return(
        <Aux>
            <Backdrop 
                show={props.open} 
                clicked={props.closed}/>

            <div className={sideDrawerClasses.join(" ")}>
                
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;