import React from 'react';
import { Provider } from 'react-redux';
import Layout from './src/components/layout/AppLayout';

import store from './src/store';

// eslint-disable-next-line react/display-name,react/prop-types
const AppProvider = ({ element }) => {
  return (
    <Provider store={store}>
      {/* <Layout>{element}</Layout> */}
      {element}
    </Provider>
  );
};

export default AppProvider;
