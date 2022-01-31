export const ModalHandler = ({show, message, type}) => {
  return async dispatch => {
    dispatch({
      type: 'MODAL_VALUES',
      payload: {
        show: show,
        message: message ? message : null,
        type: type ? type : null,
      },
    });
  };
};
