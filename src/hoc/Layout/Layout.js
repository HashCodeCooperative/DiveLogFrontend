import React, { Component } from "react";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.module.css";
import '../../../node_modules/uikit/dist/css/uikit.css'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    }

    drawerToggleHandler = () => {
        this.setState((previousState) => {
            return({showSideDrawer: !previousState.showSideDrawer})
        });
    }

    render()  {  
        return(            
            <Aux>
                <Toolbar 
                    drawerToggleClicked = {this.drawerToggleHandler}
                    authenticated={this.props.authenticated}/>
                <SideDrawer 
                    closed = {this.closeSideDrawerHandler}
                    open = {this.state.showSideDrawer}
                    authenticated={this.props.authenticated}/>
                
                <main className = {classes.Content} >
                    {this.props.children}
                </main>
            </Aux>
        );
    };
 }

export default Layout;