import firebase from "../../config/firebase";
export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const LOGOUT = "LOGOUT";

export const loginAction = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};
export const verifyAuth = () => {
  return function (dispatch) {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(loginAction(user));
      } else {
        dispatch(logoutAction());
      }
    });
  };
};
export const registerAction = (user) => {
  return {
    type: REGISTER_USER,
    payload: user,
  };
};
export const logoutAction = (user) => {
  return {
    type: LOGOUT,
    payload: user,
  };
};
