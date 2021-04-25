import React from 'react'
import { Redirect } from "react-router-dom"
import { reduxConnect } from "services/redux/mapping"
import * as Consts from 'services/redux/consts'
import Log from 'utils/Log'
import Login from 'components/Login'

const withAuth = (WrappedComponent) => {

    class AuthComponent extends React.Component {

        componentDidMount() {
            Log.d('AuthComponent => componentDidMount')
            if (this.props.auth === Consts.AUTH_VALIDATE) {
                this.onAuthStateChangedInit()
            }
        }

        onAuthStateChangedInit() {
            Log.d('AuthComponent => onAuthStateChangedInit')
            setTimeout(() => {
                let accessToken = localStorage.getItem('accessToken')
                if (accessToken) {
                    Log.d('authUser')
                    this.props.setUser({})
                    this.props.setAuth(Consts.AUTH_SUCCESS)
                } else {
                    Log.d('!authUser')
                    this.props.setUser(null)
                    this.props.setAuth(Consts.AUTH_REQUIRED)
                }
            }, 1000)

            // firebase.auth().onAuthStateChanged((authUser) => {
            //     Log.d('onAuthStateChanged')
            //     if (authUser) {
            //         Log.d('authUser')
            //         firebase.firestore().collection('users')
            //             .where('email', '==', authUser.uid).get()
            //             .then((res) => {
            //                 let user = res.docs.length > 0 ? res.docs[0].data() : null
            //                 Log.d('userDB', user)
            //                 this.props.setUser(user)
            //                 this.props.setAuth(user ? Consts.AUTH_SUCCESS : Consts.AUTH_REQUIRED)
            //             });
            //     } else {
            //         Log.d('!authUser')
            //         this.props.setUser(null)
            //         this.props.setAuth(Consts.AUTH_REQUIRED)
            //     }
            // });
        }

        render() {
            switch (this.props.auth) {
                case Consts.AUTH_VALIDATE:
                    return (<div>Validating...</div>)
                case Consts.AUTH_SUCCESS:
                    return (<WrappedComponent {...this.props} />);
                case Consts.AUTH_EXIT:
                    return (<Redirect to="/" />)
                default:
                    return (<Login />)
            }
        }
    }

    return reduxConnect(AuthComponent)
}


export default withAuth;