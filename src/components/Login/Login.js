import React, {Component} from 'react';
// import classes from './Login.module.css';
import '../../../node_modules/uikit/dist/css/uikit.css';
import Modal from '../UI/Modal/Modal';
import Spinner from '../UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';

class Login extends Component {

    state={
        authenticated: false
    }

    authenticationHandler = () => {
        this.setState({authenticated: true})
    }

    render() {
        

        return(
            <Aux>
                <Modal 
                    show={!this.state.authenticated}
                    modalClosed={this.authenticationHandler}>
                    <p className='uk-heading-medium'>Please log in</p>
                    <Spinner/>
                </Modal>
                {this.state.authenticated ? <p>you are authenticated</p> : null}
            </Aux>
        );
    };
}

export default Login;