import React, { Component } from 'react';
import Aux from '../../../../hoc/Aux/Aux';
// import classes from './DiveDetails.module.css';

class diveDetails extends Component {
    
    render() {

        const diveDetails = this.props.diveDetails;     
            
        const partners = diveDetails.dive.divers.map(diver => (
            <li key={diver.user.userId}>
                <strong>{diver.user.firstName} {diver.user.lastName} </strong>
                {/* eslint-disable-next-line */}
                ( <a uk-icon="icon: mail" href={"mailto:"+diver.user.email}></a>
                <a href={"mailto:"+diver.user.email}> {diver.user.email}</a> )
            </li>)
        );
        
        return(
            <Aux >
                <div className={this.props.modeClasses +
                    " uk-card uk-card-default uk-card-body uk-animation-slide-top-medium"}
                >
                    <h4>Dive details</h4>
                    <ul className="uk-list uk-list-collapse uk-list-striped">
                        <li>maximum depth: <strong>{diveDetails.maxDepth}</strong> m</li>
                        <li>average depth: <strong>{diveDetails.avgDepth}</strong> m</li>
                        <li>duration: <strong>{diveDetails.durationInMinutes}</strong> min</li>
                        <li>dive site: <strong>{diveDetails.dive.diveSite.name}</strong></li>
                        <li>GPS position: <strong>{diveDetails.dive.diveSite.gpsPosition}</strong></li>
                        <li>diving site type: <strong>{diveDetails.dive.diveType}</strong></li>
                        <li>water: <strong>{diveDetails.dive.water}</strong></li>
                        <li>water stream: <strong>{diveDetails.dive.waterStream}</strong></li>
                        <li>weather: <strong>{diveDetails.dive.weather}</strong></li>
                        <li>air temperature: <strong>{diveDetails.dive.airTemp}</strong> C</li>
                        <li>water temperature: <strong>{diveDetails.dive.waterTemp}</strong> C</li>
                        <li>visibility: <strong>{diveDetails.dive.visibility}</strong> m</li>
                        <li>notes: <strong>{diveDetails.notes}</strong></li>
                    </ul>        
                </div>

                <div className={this.props.modeClasses +
                    " uk-card uk-card-default uk-card-body uk-animation-slide-top-medium"}
                >
                    <h4>Equipment</h4>
                    <ul className="uk-list uk-list-collapse uk-list-striped">
                        <li>diving suit: <strong>{diveDetails.divingSuit}</strong></li>
                        <li>gas: <strong>{diveDetails.gas}</strong></li>
                        <li>cylinder type: <strong>{diveDetails.cylinderType}</strong></li>
                        <li>cylinder size: <strong>{diveDetails.cylinderCapacity}</strong> l</li>
                        <li>cylinder start pressure: <strong>{diveDetails.cylStartPressure}</strong> bar</li>
                        <li>cylinder end pressure: <strong>{diveDetails.cylEndPressure}</strong> bar</li>
                        <li>surface air consumption: <strong>{diveDetails.surfaceAirConsumption}</strong> l/min</li>
                        <li>ballast: <strong>{diveDetails.ballast}</strong> kg</li>
                    </ul>
                </div>

                <div className={this.props.modeClasses +
                    " uk-card uk-card-default uk-card-body uk-animation-slide-top-medium"}
                >
                    <h4>Partners</h4>
                    <ul className="uk-list uk-list-collapse uk-list-striped">
                        {partners}
                    </ul>
                </div>
                
            </Aux>          
        );
    } 
};

export default diveDetails;