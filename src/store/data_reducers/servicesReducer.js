const ADD_SERVICE = "ADD_SERVICE";
const DELETE_SERVICE = "DELETE_SERVICE";
const UPDATE_SERVICE = "UPDATE_SERVICE";
const FETCH_SERVICES = "FETCH_SERVICE";

// const addServiceAction = (service) => {
//   return {
//     type: ADD_SERVICE,
//     payload: service,
//   };
// };
// const deleteServiceAction = (service) => {
//   return {
//     type: DELETE_SERVICE,
//     payload: service,
//   };
// };
// const updateServiceAction = (service) => {
//   return {
//     type: UPDATE_SERVICE,
//     payload: service,
//   };
// };

export const listenToServicesAction = (services) => {
  return {
    type: FETCH_SERVICES,
    payload: services,
  };
};
const initialState = {
  services: [],
};

export const servicesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_SERVICE:
      return {
        ...state,
        services: [...state.services, payload],
      };
    case UPDATE_SERVICE:
      return {
        ...state,
        services: [
          ...state.services.filter((x) => x.id !== payload.id),
          payload,
        ],
      };
    case DELETE_SERVICE:
      return {
        ...state,
        services: [...state.services.filter((x) => x.id !== payload.id)],
      };
    case FETCH_SERVICES:
      return {
        ...state,
        services: payload,
      };
    default:
      return state;
  }
};
