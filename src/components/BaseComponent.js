import { Component } from 'react'
import firebase from 'services/firebase'
import * as Consts from 'services/redux/consts'
import Log from 'utils/Log'

export default class BaseComponent extends Component {

    Log = Log
    Consts = Consts
    recaptchaVerifier
    confirmationResult

    componentDidMount() {
        // window.componentHandler.upgradeDom();
    }

    onLogout = (e) => {
        firebase.auth().signOut()
    }

    onChange = (e) => this.setState({ [e.target.id]: e.target.value });
}
