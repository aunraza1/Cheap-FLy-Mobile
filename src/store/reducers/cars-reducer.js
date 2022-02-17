const INITIAL_STATE = {
  loading: false,
  cars: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_CARS_PROGRESSS':
      return {
        ...state,
        loading: true,
      };
    case 'GET_CARS_SUCCESS':
      return {
        ...state,
        loading: false,
        cars: action.payload,
      };
    case 'GET_CARS_ERROR':
      return {
        loading: false,
        cars: action.payload,
      };
    default:
      return state;
  }
};
