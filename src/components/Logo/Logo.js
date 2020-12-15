import React from 'react';
import classes from './Logo.module.css';
import diveFlag from '../../assets/images/diver-down-flag.png';
const logo = ( props ) => {

    return(
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={diveFlag} alt='diver down flag'/>
        </div>
    );
};

export default logo;