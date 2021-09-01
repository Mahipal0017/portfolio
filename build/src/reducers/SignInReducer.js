// import * as Actions from '../actions/login';

// export const SignInReducer = (state,action) => {
//         if (typeof state === 'undefined') { 
//             return {"intialized": false, "fetching":false}
//         }
    
//         switch(action.type) {
//             case Actions.INIT_SIGNIN_REQUEST:
//                 return {"intialized": false, "fetching":true};

//             case Actions.SIGNIN_REQUEST_COMPLETE:
//                 return {"intialized": true, "fetching":false, status:action.status};

//             default:
//                 console.log("default sigin reducer");
//                 return state;
//         }
//     }

// export default SignInReducer;