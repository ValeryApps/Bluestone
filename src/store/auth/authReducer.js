import { LOGIN_USER, LOGOUT, REGISTER_USER } from "./authAction";
const initialState = {
  authenticated: false,
  currentUser: null,
};
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          uid: payload.uid,
          photoURL: payload.photoURL,
          displayName: payload.displayName,
        },
      };
    case REGISTER_USER:
      return {
        ...state,
        payload,
      };
    case LOGOUT:
      return {
        payload,
      };
    default:
      return state;
  }
};
