import React from 'react';
import { reduxConnect } from "services/redux/mapping"
import firebase from 'services/firebase'
import BaseComponent from 'components/BaseComponent';

class Login extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
            phoneNumber: '+94762724081',
            verificationCode: '123456',
            confirmationResult: ''
        }
    }

    componentDidMount() {
        this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible'
            // 'callback': (response) => this.signInWithPhoneNumber()
        })
        this.recaptchaVerifier.render()
    }

    signInWithPhoneNumber = () => {
        firebase.auth().signInWithPhoneNumber(this.state.phoneNumber, this.recaptchaVerifier).then((confirmationResult) => {
            console.log(confirmationResult)
            this.setState({ confirmationResult })
        }).catch((error) => {
            console.log(error)
        })
    }

    verifyPhoneNumber = () => {
        this.state.confirmationResult.confirm(this.state.verificationCode).then((result) => {
            console.log(result.user);
        }).catch((error) => {
            console.log(error)
        })
    }

    signInWithPopupGoogle = () => {
        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.phoneNumber} id="phoneNumber" onChange={this.onChange} placeholder="Phone Number" type="text" />
                {this.state.confirmationResult &&
                    <input value={this.state.verificationCode} id="verificationCode" onChange={this.onChange} placeholder="Code" type="text" />
                }
                {this.state.confirmationResult && <button onClick={this.verifyPhoneNumber} >Verify Code</button>}
                <button onClick={this.signInWithPhoneNumber} >Phone Login</button>
                <button onClick={this.signInWithPopupGoogle} >Google Login</button>
                <div id="recaptcha-container"></div>
            </div>
        );
    }
}

export default reduxConnect(Login)