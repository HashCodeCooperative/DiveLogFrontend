import React, {Component} from 'react';
// import classes from './Login.module.css';
import '../../../node_modules/uikit/dist/css/uikit.css';
import Modal from '../UI/Modal/Modal';
import Spinner from '../UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';

class Login extends Component {

    render() {     

        return(
            <Aux>
                <Modal 
                    show={!this.props.authenticated}
                    modalClosed={this.props.loginHandler}>
                    <p className='uk-heading-small'>Please log in</p>
                    <Spinner/>
                    <button 
                        className="uk-button uk-button-default"
                        onClick={this.props.loginHandler}>
                            authenticate
                        </button>
                </Modal>
                {this.props.authenticated ? <div className="uk-card uk-card-body uk-card-default"><h3 className="uk-card-title">authenticated</h3><p>you have succesfully logged in</p></div> : null}
            </Aux>
        );
    };
}

export default Login;