import * as AuthActions from '../actions/authActions';

const initialState = {
    lastUpdated: null,
    isAuthenticated: false,
    isFetching: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthActions.LOGIN_REQUEST:
            return {
                ...state,
                lastUpdated: action.lastUpdated,
                isAuthenticated: action.isAuthenticated,
                isFetching: action.isFetching,
            };
        case AuthActions.LOGIN_SUCCESS:
            return {
                ...state,
                lastUpdated: action.lastUpdated,
                isAuthenticated: action.isAuthenticated,
                isFetching: action.isFetching,
            };
        case AuthActions.LOGOUT_REQUEST:
            return {
                ...state,
                lastUpdated: action.lastUpdated,
                isFetching: action.isFetching
            };
        case AuthActions.LOGOUT_SUCCESS:
            return {
                ...state,
                lastUpdated: action.lastUpdated,
                isAuthenticated: action.isAuthenticated,
                isFetching: action.isFetching,
            };
        default:
            return state;
    }
}

export default authReducer;