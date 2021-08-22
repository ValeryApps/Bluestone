export const ASYNC_ACTION_START = "ASYNC_ACTION_START";
export const ASYNC_ACTION_FINISH = "ASYNC_ACTION_FINISH";
export const ASYNC_ACTION_ERROR = "ASYNC_ACTION_ERROR";

export const async_action_start = () => {
  return {
    type: ASYNC_ACTION_START,
  };
};
export const async_action_finish = () => {
  return {
    type: ASYNC_ACTION_FINISH,
  };
};
export const async_action_error = (error) => {
  return {
    type: ASYNC_ACTION_ERROR,
    payload: error,
  };
};

const initialState = {
  loading: false,
  error: null,
};
export const asyncReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ASYNC_ACTION_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ASYNC_ACTION_FINISH:
      return {
        ...state,
        loading: false,
      };
    case ASYNC_ACTION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
