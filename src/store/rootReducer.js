import { combineReducers } from "redux";
import { modalReducer } from "../common/modals/modalReducer";
import { asyncReducer } from "./asyncReducer";
import { authReducer } from "./auth/authReducer";
import { messageReducer } from "./data_reducers/messageReducer";
import { servicesReducer } from "./data_reducers/servicesReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  async: asyncReducer,
  modals: modalReducer,
  services: servicesReducer,
  messages: messageReducer,
});
