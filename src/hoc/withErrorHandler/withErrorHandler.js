import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';
import '../../../node_modules/uikit/dist/css/uikit.css';
//import classes from './withErrorHandler.module.css';

const withErrorHandler = ( WrappedComponent, axios ) => {

    return class extends Component {
        
        state = {
            error: null
        }

        componentWillMount(){

            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });

            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error}); 
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        
        render() {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                        >
                            {this.state.error ? <p>
                                <span 
                                    className='uk-text-danger uk-margin-small-right'
                                    uk-icon="icon: warning; ratio: 2"></span>
                                {this.state.error.message}</p> 
                            : null}
                    </Modal>
                    
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    } 
};

export default withErrorHandler;