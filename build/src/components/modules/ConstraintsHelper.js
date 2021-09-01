export const getRequiredField = (t) => {

    return {
        presence: {
            message: "Please enter required field",
            //empty fields or white-space input is NOT ALLOWED
            allowEmpty: false
        }
    }
}

export const getPhoneNumberField = (t) => {
    return {
                format: {
                    pattern: `((\\(\\\d{3}\\) ?)|(\\\d{3}-))?\\\d{3}-\\\d{4}`,
                    flags: "gim",
                    message: "Please enter valid number"
                }
            }
 }

 export const getRequiredEmailAddress=(t)=>{
    return{
          presence: {message: "Please enter required field"},
          format: {
              pattern: `^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$`,
              flags: "i",
              message: "Please enter valid email"
          }
      }
    
  }