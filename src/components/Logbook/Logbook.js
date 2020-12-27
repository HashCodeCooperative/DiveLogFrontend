import React, { Component } from 'react';
// import classes from './Logbook.module.css';
import Aux from '../../hoc/Aux/Aux';
import StatisticsPanel from './StatisticsPanel/StatisticsPanel';
import DiveListItem from './DiveListItem/DiveListItem';
import Spinner from '../UI/Spinner/Spinner';
import axios from '../../axios-backend';

class Logbook extends Component {
    
    state = {
        dives: null,
        error: null
    }

    componentDidMount = () => {

        let path = '/users/' + this.props.match.params.diverId + '/dives';
        
        axios.get(path)
            .then(response => {
                this.setState({dives: response.data, error: null});
            })
            .catch(error => {
                this.setState({error: error});
            });

    }

    render() {
        let content = <Spinner/>
        if (this.state.dives) {
   
            const diveList = this.state.dives.map(dive => <DiveListItem key={dive.userDiveId} diveId={dive.userDiveId}/>)
 
            content = (
                <Aux>
                    <StatisticsPanel diverId={this.props.match.params.diverId}/>
                    {diveList}
                </Aux>); 
        }
        if (this.state.error) {
            content = <p className='uk-text-danger'>Something went wrong...</p>
        }

        return(
            <Aux>
                {content}
            </Aux>
                        
        );
    }
    
};

export default Logbook;