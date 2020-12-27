import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import DiveDetails from './DiveDetails/DiveDetails';
import Spinner from '../../UI/Spinner/Spinner';
import axios from '../../../axios-backend';
import Aux from '../../../hoc/Aux/Aux';

// import classes from './DiveList.module.css';

class DiveList extends Component {    

    state = {
        diveDetails: null,
        error: null,
        showDetails: false
    };

    componentDidMount = () => {
        const path = '/UserDives/' + this.props.diveId;
        axios.get(path)
            .then( response => {
                this.setState({diveDetails: response.data, error: null});
            })
            .catch( error => {
                this.setState({error: error});
            })
    };

    toggleDetailsHandler = () => {
        const showDetails = this.state.showDetails;
        this.setState({showDetails: !showDetails});
    }

    render() {

        const diveDetails = this.state.diveDetails;

        let content = <Spinner/>
        if (this.state.error) {
            content = <p className='uk-text-danger'>something went wrong...</p>
        } else
        if (diveDetails) {

            const date = new Date(diveDetails.dive.startTime)

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

            let details = null;
            let icon = "icon: plus-circle";

            if (this.state.showDetails) {
                details = <DiveDetails diveDetails={diveDetails}/>
                icon = "icon: minus-circle"
            };   

            content = (
                <Aux>
                    <div className = 'uk-flex'>
                        <span className="uk-label"> {diveDetails.durationInMinutes} min , {diveDetails.maxDepth} m</span>
                        <Link to={'/edit/' + diveDetails.userDiveId}>
                            <span uk-tooltip='edit the dive records' className='uk-margin-small-left uk-icon-link' uk-icon="icon: file-edit"></span>
                        </Link>
                    </div>
                    
                    <div className='uk-flex uk-margin-small-top'>    
                        <h5 onClick={this.toggleDetailsHandler}
                            uk-tooltip='click to show/hide details'>
                            <span 
                                uk-tooltip='click to show/hide details' 
                                className='uk-margin-small-right uk-icon-link' 
                                uk-icon={icon}
                                onClick={this.toggleDetailsHandler}>
                            </span>
                            {dateString} , {diveDetails.dive.diveSite.name}
                        </h5>                   
                    </div>
                    {details}
                </Aux>
            )
        }

        return(
            <div className='uk-container' uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">
                {content}
            </div>
        );
    };
}

export default DiveList;