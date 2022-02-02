const INITAL_STATE = {
  loading: false,
  user: null,
};
export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_PROGRESS':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
