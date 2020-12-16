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
                {this.props.authenticated ? <p>you are authenticated</p> : null}
            </Aux>
        );
    };
}

export default Login;