import * as Actions from '../actions/contact';

const ContactReducer = (state, action) =>{
    if (typeof state === 'undefined') { 
        return {"intialized": false, "fetching":false}
    }

    switch (action.type){
        case Actions.INIT_SEND_MESSAGE:
            return {"intialized": false, "fetching":true};
        case Actions.SEND_MESSAGE_COMPLETE:
            return {"initialized": true, "fetching":false, isSuccess:true};
        case Actions.SEND_MESSAGE_FAILED:
            return {"initialized": true, "fetching":false, isFailed:true};
        default:
            return state;
    }
}

export default ContactReducer;