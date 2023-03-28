import wrapWithProvider from './wrap-with-provider';
export const wrapRootElement = wrapWithProvider;

const React = require('react');
const Layout = require('./src/components/layout/AppLayout');

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>;
};
