import React from 'react';
import classes from './Logo.module.css';
import diveFlag from '../../assets/images/diver-down-flag.png';
import hashCode from '../../assets/images/hashcode.png';

const logo = ( props ) => {

    let image = diveFlag;
    if (props.logo === 'hashcode') {
        image = hashCode;
    }

    return(
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={image} alt='logo'/>
        </div>
    );
};

export default logo;