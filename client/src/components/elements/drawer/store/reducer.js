const INITIAL_STATE = {
  drawerContentCategory: 'Comics',
  drawerContentType: 'Collection',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_DRAWER_CONTENT_TYPE':
      return {
        ...state,
        drawerContentType: action.payload,
      };
    case 'SET_DRAWER_CONTENT_CATEGORY':
      return {
        ...state,
        drawerContentCategory: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
