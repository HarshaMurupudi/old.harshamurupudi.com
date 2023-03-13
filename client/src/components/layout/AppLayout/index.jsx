import React from 'react';
import SideDrawer from '@/components/drawer';

const AppLayout = ({ children }) => {
  return (
    <div>
      <SideDrawer />
      {children}
    </div>
  );
};

export default AppLayout;
