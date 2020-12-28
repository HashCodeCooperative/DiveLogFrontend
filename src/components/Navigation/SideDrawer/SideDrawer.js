import React from 'react';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';


const sideDrawer = ( props ) => {

    const sideDrawerClasses = [classes.SideDrawer, ];
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
            
            <div className={sideDrawerClasses.join(" ")} >
                <NavigationItems
                    // classes="uk-nav uk-nav-default"
                    mode='sidebar'
                    authenticated={props.authenticated}
                    closed={props.closed}
                    diverId={props.diverId}
                    modeToggler={props.modeToggler}
                    modeClasses={props.modeClasses}
                />
            </div>
      </Aux>
      
    );
};

export default sideDrawer;