const INITIAL_STATE = {
  loading: false,
  hotels: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_HOTELS_PROGRESSS':
      return {
        ...state,
        loading: true,
      };
    case 'GET_HOTELS_SUCCESS':
      return {
        ...state,
        loading: false,
        hotels: action.payload,
      };
    case 'GET_HOTELS_ERROR':
      return {
        loading: false,
        hotels: action.payload,
      };
    default:
      return state;
  }
};
