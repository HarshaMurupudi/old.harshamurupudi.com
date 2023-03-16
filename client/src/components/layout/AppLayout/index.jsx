import React from 'react';

import SideDrawer from '@/components/drawer';
import About from '@/features/about';

const AppLayout = ({ children }) => {
  return (
    <div>
      <SideDrawer>
        <About />
      </SideDrawer>
      {children}
    </div>
  );
};

export default AppLayout;
