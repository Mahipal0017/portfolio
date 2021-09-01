// import axios from 'axios';

// export const INIT_SIGNUP_REQUEST = 'INIT_SIGNUP_REQUEST';
// export const SIGNUP_REQUEST_COMPLETE = "SIGNUP_REQUEST_COMPLETE";
// export const INIT_SIGNIN_REQUEST = 'INIT_SIGNIN_REQUEST';
// export const SIGNIN_REQUEST_COMPLETE = 'SIGNIN_REQUEST_COMPLETE';

// export function initSignUp(){
//     return {
//         type: INIT_SIGNUP_REQUEST
//     }
// }

// export function requestSignUp(data){
//     return dispatch => {
//         dispatch(initSignUp());
//         const {email, password} = data;

//         const apiKey = "AIzaSyArdj452mX1ZMBsl9FsaSqr9_HAY05SWds";
//         console.log("apikey", apiKey)
//         const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser';
//         const URL = `${url}?key=${apiKey}`;
//         const payload = {email, password, returnSecureToken: true};

//         axios.post(URL,payload)
//         .then( response => {
//             console.log("signupaction respon",response, response.status);
//             dispatch(signUpRequestComplete(response.data,response.status));
//         })
//         .catch(response => {
//             console.log("signupaction err", response, response.status);
//             dispatch(signUpRequestComplete(response.data, response.status))
//         }) 
//     }
// }

// export function signUpRequestComplete(data,status){
//     return {
//         type: SIGNUP_REQUEST_COMPLETE,
//         data,
//         status
//     }
// }


// export function initSignIn(){
//     return {
//         type: INIT_SIGNIN_REQUEST
//     }
// }

// export function requestSignIn(data){
//     return dispatch => {
//         dispatch(initSignIn());
//         const {email, password} = data;

//         const apiKey = "AIzaSyArdj452mX1ZMBsl9FsaSqr9_HAY05SWds";
//         console.log("apikey", apiKey)
//         const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword';
//         const URL = `${url}?key=${apiKey}`;
//         const payload = {email, password};

//         axios.post(URL,payload)
//         .then( response => {
//             console.log("signinaction respon",response,response.status );
//             dispatch(signInRequestComplete(response.data,response.status));
//         })
//         .catch(err => {
//             console.log("signinaction err", err, err.status);
//             dispatch(signInRequestComplete(err.data,err.status))
//         }) 
//     }
// }

// export function signInRequestComplete(data,status){
//     return {
//         type: SIGNIN_REQUEST_COMPLETE,
//         data,
//         status
//     }
// }