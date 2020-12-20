import React from 'react';
import {Link} from 'react-router-dom';
// import classes from './DiveDetails.module.css';

const diveDetails = ( props ) => {

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

    const partners = props.dive.dive.divers.map(diver => (
        <li key={diver.user.userId}>
            <strong>{diver.user.firstName} {diver.user.lastName} </strong>
             ( <a uk-icon="icon: mail" href={"mailto:"+diver.user.email}></a>
            <a href={"mailto:"+diver.user.email}> {diver.user.email}</a> )
        </li>)
    );

    return(
        <li>
            <div className = 'uk-flex'>
                <span className="uk-label"> {props.dive.durationInMinutes} min , {props.dive.maxDepth} m</span>
                <Link to={'/edit/' + props.dive.userDiveId}>
                    <span uk-tooltip='edit the dive records' className='uk-margin-small-left uk-icon-link' uk-icon="icon: file-edit"></span>
                </Link>
            </div>
                
            <a className="uk-accordion-title" href="#" uk-tooltip="click to show/hide details">
                {dateString} , {props.dive.dive.diveSite.name} 
            </a>
            
            
            <div className="uk-accordion-content">
                
                <div className="uk-card uk-card-default uk-card-body">
                    <p className="uk-card-title">Dive details</p>
                    <ul className="uk-list uk-list-collapse uk-list-striped">
                        <li>maximum depth: <strong>{props.dive.maxDepth}</strong> m</li>
                        <li>average depth: <strong>{props.dive.avgDepth}</strong> m</li>
                        <li>duration: <strong>{props.dive.durationInMinutes}</strong> min</li>
                        <li>dive site: <strong>{props.dive.dive.diveSite.name}</strong></li>
                        <li>GPS position: <strong>{props.dive.dive.diveSite.gpsPosition}</strong></li>
                        <li>diving site type: <strong>{props.dive.dive.diveType}</strong></li>
                        <li>water: <strong>{props.dive.dive.water}</strong></li>
                        <li>water stream: <strong>{props.dive.dive.waterStream}</strong></li>
                        <li>weather: <strong>{props.dive.dive.weather}</strong></li>
                        <li>air temperature: <strong>{props.dive.dive.airTemp}</strong> C</li>
                        <li>water temperature: <strong>{props.dive.dive.waterTemp}</strong> C</li>
                        <li>visibility: <strong>{props.dive.dive.visibility}</strong> m</li>
                        <li>notes: <strong>{props.dive.notes}</strong></li>
                    </ul>        
                </div>

                <div className="uk-card uk-card-default uk-card-body">
                    <p className="uk-card-title">Equipment</p>
                    <ul className="uk-list uk-list-collapse uk-list-striped">
                        <li>diving suit: <strong>{props.dive.divingSuit}</strong></li>
                        <li>gas: <strong>{props.dive.gas}</strong></li>
                        <li>cylinder type: <strong>{props.dive.cylinderType}</strong></li>
                        <li>cylinder size: <strong>{props.dive.cylinderCapacity}</strong> l</li>
                        <li>cylinder start pressure: <strong>{props.dive.cylStartPressure}</strong> bar</li>
                        <li>cylinder end pressure: <strong>{props.dive.cylEndPressure}</strong> bar</li>
                        <li>surface air consumption: <strong>{props.dive.surfaceAirConsumption}</strong> l/min</li>
                        <li>ballast: <strong>{props.dive.ballast}</strong> kg</li>
                    </ul>
                </div>

                <div className="uk-card uk-card-default uk-card-body">
                    <p className="uk-card-title">Partners</p>
                    <ul className="uk-list uk-list-collapse uk-list-striped">
                        {partners}
                    </ul>
                </div>
                
            </div>
        </li>
    );
};

export default diveDetails;