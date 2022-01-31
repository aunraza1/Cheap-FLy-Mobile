const INITIAL_STATE = {
  show_modal: false,
  modal_message: null,
  modal_type: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'MODAL_VALUES':
      return {
        ...state,
        show_modal: action.payload.show,
        modal_message: action.payload.message,
        modal_type: action.payload.type,
      };
    default:
      return state;
  }
};
