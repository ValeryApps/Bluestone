const SEND_MESSAGE = "SEND_MESSAGE";
const READ_MESSAGE = "READ_MESSAGE";

export const sendMessageAction = (message) => {
  return {
    type: SEND_MESSAGE,
    payload: message,
  };
};
export const readMessageAction = (message) => {
  return {
    type: READ_MESSAGE,
    payload: message,
  };
};

const initialValues = {
  messages: [],
};
export const messageReducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state, payload],
      };
    case READ_MESSAGE:
      return {
        ...state,
        messages: payload,
      };
    default:
      return state;
  }
};
