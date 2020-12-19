import React from 'react';

// import classes from './DiveDetails.module.css';

const diveDetails = ( props ) => {

    console.log(props);
    const date = new Date(props.dive.dive.startTime)
    
    let minutes = date.getMinutes();
    if (minutes < 10 ) {
        minutes = '0' + minutes;
    }

    let day = date.getDate();
    if (day < 10 ) {
        day = '0' + day;
    }

    const dateString =  date.getFullYear() + "-" + 
                        date.getMonth() + '-' + 
                        day + ' ' +
                        date.getHours() + ':' +
                        minutes;
                        
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