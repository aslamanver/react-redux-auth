import * as Consts from 'services/redux/consts'

const initialState = {
    auth: Consts.AUTH_VALIDATE,
    user: null
};

function rootReducer(state = initialState, action) {

    if (action.type === Consts.ACTION_AUTH) {
        return { ...state, auth: action.payload };
    }

    if (action.type === Consts.ACTION_AUTH_USER) {
        return { ...state, user: action.payload };
    }

    return state;
}

export default rootReducer;