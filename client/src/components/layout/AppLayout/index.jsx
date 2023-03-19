import React from 'react';
import { connect } from 'react-redux';

import SideDrawer from '@/components/elements/drawer';
import About from '@/features/about';
import Collection from '@/features/collection';
import Comics from '@/features/comics';
import Projects from '@/features/projects';
import Work from '@/features/work';

const AppLayout = ({ drawerTitle, children }) => {
  const componentLookup = {
    Bio: About,
    Collection,
    Comics,
    Projects,
    Work,
  };

  const DrawerContentComponent = componentLookup[drawerTitle];

  return (
    <div>
      <SideDrawer>
        <DrawerContentComponent />
      </SideDrawer>
      {children}
    </div>
  );
};

const mapStateToProps = (state) => ({
  drawerTitle: state.getIn(['app', 'drawerTitle']),
});

export default connect(mapStateToProps, null)(AppLayout);
