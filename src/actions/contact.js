export const INIT_SEND_MESSAGE = "INIT_SEND_MESSAGE";
export const SEND_MESSAGE_COMPLETE ="SEND_MESSAGE_COMPLETE";
export const SEND_MESSAGE_FAILED = "SEND_MESSAGE_FAILED";
export const RESET_CONTACT_FORM = "RESET_CONTACT_FORM";

export function initSendMessage(){
    return {
        type: INIT_SEND_MESSAGE,
    }
}

export function sendMessage(data){
    return (dispatch, getState, 
        // {getFirebase, getFirestore}
        ) => {
        dispatch(initSendMessage());

        // const firestore=getFirestore();
        // firestore.collection('contactedUsers').add({
        //     ...data,
        //     createdAt: new Date(),
        // }).then(()=>{
        //     dispatch(sendMessageComplete());   
        // }).catch( err => {
            dispatch(sendMessageFailed());
        // })   
    }
}

export function sendMessageComplete(){
    return {
        type: SEND_MESSAGE_COMPLETE,
    }
}

export function sendMessageFailed(){
    return {
        type: SEND_MESSAGE_FAILED,
    }
}