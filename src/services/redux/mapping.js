import * as Consts from 'services/redux/consts'
import { connect } from "react-redux"

export const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        user: state.user
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        setAuth: (auth) => dispatch({ type: Consts.ACTION_AUTH, payload: auth }),
        setUser: (user) => dispatch({ type: Consts.ACTION_AUTH_USER, payload: user })
    };
};

export const reduxConnect = connect(mapStateToProps, mapDispatchToProps)