import { combineReducers } from 'redux';
import HomeReducer from '../reducers/homeReducer';
import SignUpReducer from '../reducers/SignUpReducer';
import SignInReducer from '../reducers/SignInReducer';
import ContactReducer from '../reducers/contactReducer';

const rootReducer = combineReducers({
    HomeReducer,
    SignUpReducer,
    SignInReducer,
    ContactReducer
});

export default rootReducer;