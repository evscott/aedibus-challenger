import * as ChallengesActions from '../actions/challengesActions';

const initialState = {
    lastUpdated: null,
    isAuthenticated: false,
    isFetching: null,
    received: [],
    sent: [],
};

const challengesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ChallengesActions.GET_CHALLENGES_REQUEST:
            return {
                ...state,
                lastUpdated: action.lastUpdated,
                isFetching: action.isFetching,
            };
        case ChallengesActions.GET_CHALLENGES_SUCCESS:
            return {
                ...state,
                lastUpdated: action.lastUpdated,
                isFetching: action.isFetching,
                received: action.received,
                sent: action.sent,
            };
        default:
            return state;
    }
}

export default challengesReducer;