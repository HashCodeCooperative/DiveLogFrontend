import React, {Component} from 'react';
import axios from '../../../axios-backend';
import Spinner from '../../UI/Spinner/Spinner';
import Aux from '../../../hoc/Aux/Aux';
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
        //         this.setState({statistics: response.data});
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

        if (this.state.error) {
            content = (
                <p className='uk-text-danger'>something went wrong...</p>
            )
        } else
        if (this.state.statistics) {
            
            content = (<Aux>
                
                <div className="uk-card uk-card-default uk-card-body uk-margin-top uk-align-center">
                    {/* <p className="uk-card-titl e"></p> */}
                    <p>Number of recorded dives: <strong>{this.state.statistics.numberOfDives}</strong></p>
                </div>

                <div className="uk-card uk-card-default uk-card-body uk-margin-left uk-margin-top uk-align-center">
                    {/* <p className="uk-card-title">Deepest dive depth</p> */}
                    <p> Deepest dive depth: <strong>{this.state.statistics.deepestDiveDepth}</strong> m</p>
                </div>

                <div className="uk-card uk-card-default uk-card-body uk-margin-left uk-margin-top uk-align-center">
                    {/* <p className="uk-card-title">Longest dive duration</p> */}
                    <p>Longest dive duration: <strong>{this.state.statistics.longestDiveDuration}</strong> min</p>
                </div>

            </Aux>)

        };

        

        return(
            <div className='uk-flex'>     
                {content}
            </div>
        );
    };
}

export default StatisticsPanel;