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
                    modalClosed={this.props.authenticationHandler}>
                    <p className='uk-heading-medium'>Please log in</p>
                    <Spinner/>
                </Modal>
                {this.props.authenticated ? <p>you are authenticated</p> : null}
            </Aux>
        );
    };
}

export default Login;