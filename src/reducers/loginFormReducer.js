// import * as actionTypes from '../actions/actionTypes';
// import updatedObject from '../components/UI/utility';

// const initialState = {
//     token: null,
//     userId: null,
//     error: null,
//     loading: false,
// }

// const loginFormSubmit = (state, action) => {
//     return updatedObject(state, { error: null, loading:true });
// }

// const loginSuccess = (state, action) => {
//     return updatedObject(state, {
//         token: action.idToken,
//         userId: action.userId,
//         error: null,
//         loading: false,
//     });
// }

// const loginFail = (state, action) => {
//     return updatedObject(state, {
//         error: action.error,
//         loading: false,
//     });
// }

// const loginFormReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case actionTypes.LOGIN_FORM_SUBMIT: return loginFormSubmit(state, action);
//         case actionTypes.LOGIN_FORM_SUCCESS: return loginSuccess(state, action);
//         case actionTypes.LOGIN_FORM_FAIL: return loginFail(state, action);
//         default:
//             return state;
//     }
// }

// export default loginFormReducer;