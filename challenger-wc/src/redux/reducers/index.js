import { combineReducers } from 'redux';
import authReducer from "./authReducer";
import challengesReducer from "./challengesReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    challenges: challengesReducer,
});

export default rootReducer;