import React, {Component} from 'react';
// import classes from './Login.module.css';
import Modal from '../UI/Modal/Modal';
import Spinner from '../UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Login extends Component {

    diverId = 1;
    userName = 'Lukasz Kaczmarek'

    render() {     

        return(
            <Aux>
                <Modal 
                    show={!this.props.authenticated}
                    modeClasses={this.props.modeClasses}
                    // modalClosed={this.props.loginHandler}
                >
                    
                    <p>Please log in</p>
                    <Spinner/>
                    <button 
                        className="uk-button uk-button-default"
                        onClick={() => this.props.loginHandler(this.diverId, this.userName)}>
                            authenticate
                    </button>
                    
                </Modal>
                {this.props.authenticated ? 
                    <div className={"uk-card uk-card-body uk-card-default " + this.props.modeClasses}>
                        <h3>authenticated</h3>
                        <p>you have succesfully logged in</p>
                    </div> 
                : null}
            </Aux>
        );
    };
}

export default Login;