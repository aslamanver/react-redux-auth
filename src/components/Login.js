import React from 'react';
import { reduxConnect } from "services/redux/mapping"
import BaseComponent from 'components/BaseComponent';

class Login extends BaseComponent {

    render() {
        return (
            <div>
                <button onClick={this.onLogin} >Login</button>
            </div>
        );
    }
}

export default reduxConnect(Login)