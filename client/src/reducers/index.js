import { combineReducers } from 'redux';
import authReducer from './auth';
import currentUserReducer from './currentUser';

const rootReducer = combineReducers({
    auth: authReducer,
    currentUser: currentUserReducer
});

export default rootReducer;
