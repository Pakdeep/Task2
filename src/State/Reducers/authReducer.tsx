import { SIGN_IN, SIGN_OUT, SIGN_UP } from "../actions";

const authReducer = (state = { user: {} }, action: any) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };
    case SIGN_OUT:
      return state;
    case SIGN_UP:
      return {
        ...state, user: { ...state.user, ...action.payload }
      };
    default:
      return state;
  }
};

export default authReducer;