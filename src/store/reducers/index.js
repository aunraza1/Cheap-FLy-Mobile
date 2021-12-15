export const INITIAL_STATE = {
  loggedUser: '',
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'Add':
      console.log('Iam fired')
      return {
        ...state,
        loggedUser:action.data ,
      };
    default:
      return state;
  }
};
