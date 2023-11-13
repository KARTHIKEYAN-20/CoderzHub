import { combineReducers } from 'redux';
import authReducer from './auth';
import currentUserReducer from './currentUser';
import questionReducer from './question'

const rootReducer = combineReducers({
    auth: authReducer,
    currentUser: currentUserReducer,
    question: questionReducer
});

export default rootReducer;
