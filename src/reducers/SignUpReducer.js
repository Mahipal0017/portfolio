// import * as Actions from '../actions/login';

// export const SignUpReducer = (state,action) => {
//         if (typeof state === 'undefined') { 
//             return {"intialized": false, "fetching":false}
//         }
    
//         switch(action.type) {
//             case Actions.INIT_SIGNUP_REQUEST:
//                 return {"intialized": false, "fetching":true};

//             case Actions.SIGNUP_REQUEST_COMPLETE:
//             console.log("actions.data", action.data)
//                 return {"intialized": true, "fetching":false, "status": action.status};

//             default:
//                 console.log("default signup reducer");
//                 return state;
//         }
//     }

// export default SignUpReducer;