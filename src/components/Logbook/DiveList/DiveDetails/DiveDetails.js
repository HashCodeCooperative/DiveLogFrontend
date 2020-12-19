import React from 'react';
import {Accordion} from 'uikit-react';

// import classes from './DiveDetails.module.css';

const diveDetails = ( props ) => {

    console.log(props);
    const date = new Date(props.dive.dive.startTime)
    const dateString =  date.getFullYear() + "/" + 
                        date.getMonth() + '/' + 
                        date.getDate() + ' ' +
                        date.getHours() + ':' +
                        date.getMinutes()
    return(
        <li>
            <a className="uk-accordion-title" href="#">{dateString} , {props.dive.dive.diveSite.name} , {props.dive.durationInMinutes} min , {props.dive.maxDepth} m</a>
            <div className="uk-accordion-content">
                
                <div>
                    <div className="uk-card uk-card-default uk-card-body">
                        <p className="uk-card-title">Dive details</p>
                        <p>dive details content 1</p>
                        <p>dive details content 2</p>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default uk-card-body">
                        <p className="uk-card-title">Equipment</p>
                        <p>equipment details content 2</p>
                        <p>equipment details content 1</p>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default uk-card-body">
                        <p className="uk-card-title">Partners</p>
                        <p>partner 2</p>
                        <p>partner 1</p>
                    </div>
                </div>
                
            </div>
        </li>
    );
};

export default diveDetails;