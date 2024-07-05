
const initialState = {
  name: 'perofile name',
};
 
export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_Profile_DATA':
      let profilename;
      let atIndex = action.payload.indexOf('@');
      if (atIndex !== -1) {
        profilename = action.payload.substring(0, atIndex);
        console.log("profilename" , profilename);
        
      }
      else {
        // handle case where there's no "@" in the email (optional)
        profilename = null; // or whatever you need
      }
      return {
        ...state,
        name: profilename
      };
    default:
      return state;
  }
};
