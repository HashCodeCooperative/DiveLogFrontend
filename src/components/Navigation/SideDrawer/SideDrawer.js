import React from 'react';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";
import classes from './SideDrawer.module.css';
import { NavLink } from 'react-router-dom';
import '../../../../node_modules/uikit/dist/css/uikit.css'


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
                <ul className="uk-nav uk-nav-default">
                    <li className='uk-active'>
                        <NavLink onClick={props.closed} to='/login'>
                            {props.authenticated ? "Log out" : "Log in"}
                        </NavLink>
                    </li>
                    <li className='uk-active'>
                        <NavLink onClick={props.closed} to='/dives'>
                            Logbook
                        </NavLink>
                    </li>
                    <li className='uk-active'>
                        <NavLink onClick={props.closed} to='/add'>
                            Add
                        </NavLink>
                    </li>
                </ul>
            </div>
      </Aux>
      
    );
};

export default sideDrawer;