const INITIAL_STATE = {
  drawerTitle: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_DRAWER_TITLE':
      return {
        ...state,
        drawerTitle: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
