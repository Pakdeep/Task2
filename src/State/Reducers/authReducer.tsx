import { GET_USER, NO_USER, SIGNIN_ERROR, SIGNUP_ERROR, SIGN_IN, SIGN_OUT, SIGN_UP } from "../actions";
import { toast } from "react-toastify";
const authReducer = (state = { user: {} }, action: any) => {
  switch (action.type) {
    case SIGN_IN:
      toast.success("Welcome back.. " + action.payload.displayName);
      return {
        ...state,
        user:action.payload
      };
       case GET_USER:
      return {
        ...state,
        user:action.payload
      };  
       case NO_USER:
      toast.error("Non user found...");
      return state
      
    case SIGNUP_ERROR:
      toast.error("Sign up error...");
      return state;

    case SIGN_UP:
      toast.success("Welcome.. "+ action.payload.displayName);
      return {
        ...state, user:action.payload 
      };
    case SIGNIN_ERROR:
      toast.error("Wrong Credentials");
      return state;

    case SIGN_OUT:
      toast.success("You signed out..");
      return state;

    default:
      return state;
  }
};

export default authReducer;