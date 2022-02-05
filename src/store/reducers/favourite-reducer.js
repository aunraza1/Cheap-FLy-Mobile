const INITIAL_STATE = {
  fav_loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FAVOURITE_PROGRESS':
      return {
        ...state,
        fav_loading: true,
      };
    case 'FAVOURITE_SUCCESS':
      return {
        ...state,
        fav_loading: false,
      };
    case 'FAVOURITE_ERROR':
      return {
        fav_loading: false,
      };
    default:
      return state;
  }
};
