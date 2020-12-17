import React, {Component} from 'react';
import axios from '../../../axios-backend';

// import classes from './StatisticsPanel.module.css';

class StatisticsPanel extends Component {

    componentDidMount = () => {
      
        const path = '/users/' + this.props.diverId + '/statistics';
        axios.get(path)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log('ERROR');
                console.log(error);
            });
    }
    render() {

        return(
            <div>StatisticsPanel for diver {this.props.diverId}</div>
        );
    };
}

export default StatisticsPanel;