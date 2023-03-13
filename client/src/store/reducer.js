import { combineReducers } from 'redux-immutable';

import { reducer as appReducer } from '@/components/drawer/store';

export default combineReducers({
  app: appReducer,
});
