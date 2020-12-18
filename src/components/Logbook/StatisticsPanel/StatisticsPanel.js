import React, {Component} from 'react';
import axios from '../../../axios-backend';
import Spinner from '../../UI/Spinner/Spinner';
import '../../../../node_modules/uikit/dist/css/uikit.css';

// import classes from './StatisticsPanel.module.css';

class StatisticsPanel extends Component {

    state = {
        error: null,
        statistics: null
    }

    componentDidMount = () => {
      
        // const path = '/users/' + this.props.diverId + '/statistics';
        // axios.get(path)
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         this.setState({error: error});
        //     });

        this.setState({statistics: {
            userName: 'Jan',
            numberOfDives: 2,
            deepestDiveDepth: 20,
            longestDiveDuration: 60
        }})
    }

    render() {
        let content = <Spinner/>;

        if (this.state.statistics) {
            
            content = (<div className='uk-flex'>
                
                <div className="uk-card uk-card-default uk-card-body uk-margin-top uk-align-center">
                    <p className="uk-card-title">Number of dives</p>
                    <p>{this.state.statistics.numberOfDives}</p>
                </div>

                <div className="uk-card uk-card-default uk-card-body uk-margin-left uk-margin-top uk-align-center">
                    <p className="uk-card-title">Deepest dive depth</p>
                    <p>{this.state.statistics.deepestDiveDepth} meters</p>
                </div>

                <div className="uk-card uk-card-default uk-card-body uk-margin-left uk-margin-top uk-align-center">
                    <p className="uk-card-title">Longest dive duration</p>
                    <p>{this.state.statistics.longestDiveDuration} minutes</p>
                </div>

            </div>)

        } else if (this.state.error) {
            content = (
                <p className='uk-text-warning'>something went wrong...</p>
            )
        }

        return(
            <div className="uk-container">     
                {content}
            </div>
        );
    };
}

export default StatisticsPanel;