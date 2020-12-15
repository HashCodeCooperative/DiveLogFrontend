import React from 'react';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";
import classes from './SideDrawer.module.css';
import { ListItem, List} from 'uikit-react';
import { Link } from 'react-router-dom';

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
                        <List type="divider">
                            <ListItem>
                                <Link to='/login'>
                                    Log in
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/dives'>
                                    Logbook
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/add'>
                                    Add
                                </Link>
                            </ListItem>
                        </List>
            </div>
        </Aux>
    );
};

export default sideDrawer;