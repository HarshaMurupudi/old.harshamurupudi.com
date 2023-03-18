export const setDrawerTitle = (title) => (dispatch) => {
  dispatch({
    type: 'SET_DRAWER_TITLE',
    payload: title,
  });
};
