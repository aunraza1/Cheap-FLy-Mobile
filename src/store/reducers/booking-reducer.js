const INITIAL_STATE = {
  loading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'BOOK_APPOINTMENT_PROGRESS':
      return {
        ...state,
        loading: action.payload,
      };
    case 'BOOK_APPOINTMENT_ERROR':
      return {
        ...state,
        loading: action.payload,
      };
    case 'BOOK_APPOINTMENT_SUCCESS':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
