import { combineReducers } from 'redux';
import SignUpReducer from '../reducers/SignUpReducer';
import SignInReducer from '../reducers/SignInReducer';
import ContactReducer from '../reducers/contactReducer';

const rootReducer = combineReducers({
    SignUpReducer,
    SignInReducer,
    ContactReducer
});

export default rootReducer;