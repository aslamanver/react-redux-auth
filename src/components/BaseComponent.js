import { Component } from 'react'
import * as Consts from 'services/redux/consts'
import Log from 'utils/Log'

export default class BaseComponent extends Component {

    Log = Log
    Consts = Consts

    componentDidMount() {
        // window.componentHandler.upgradeDom();
    }

    onLogin = (e) => {
        localStorage.setItem('accessToken', 'TOKEN')
        this.props.setUser({})
        this.props.setAuth(Consts.AUTH_SUCCESS)
    }

    onLogout = (e) => {
        localStorage.removeItem('accessToken')
        this.props.setUser(null)
        this.props.setAuth(Consts.AUTH_REQUIRED)
    }

    onChange = (e) => this.setState({ [e.target.id]: e.target.value });
}
