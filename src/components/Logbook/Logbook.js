import React from 'react';
// import classes from './Logbook.module.css';
import Aux from '../../hoc/Aux/Aux';
import StatisticsPanel from './StatisticsPanel/StatisticsPanel';
import DiveList from './DiveList/DiveList';

const logbook = (props) => {

    return(
        <Aux>
            <StatisticsPanel diverId={props.match.params.diverId}/>
            <DiveList/>
        </Aux>
    );
};

export default logbook;