import React from 'react';
import { connect } from 'react-redux';

import SideDrawer from '@/components/elements/drawer';
import About from '@/features/about';
import Collection from '@/features/collection';
import Comics from '@/features/comics';
import Projects from '@/features/projects';
import Work from '@/features/work';
import ImageDetails from '@/features/ImageDetails';

import {
  setDrawerContentType,
  setDrawerContentCategory,
} from '@/components/elements/drawer/store/actions';

const AppLayout = ({
  drawerContentCategory,
  drawerContentType,
  children,
  setDrawerContentType,
  setDrawerContentCategory,
}) => {
  const collectionComponentLookup = {
    Bio: About,
    Collection,
    Comics,
    Projects,
    Work,
    ImageDetails,
  };

  const detailsComponentKey = `${drawerContentCategory} ${drawerContentType}`;
  const detailsComponentLookup = {
    'Comics Details': ImageDetails,
    'Collection Details': ImageDetails,
  };

  const DrawerContentComponent =
    drawerContentType === 'Collection'
      ? collectionComponentLookup[drawerContentCategory]
      : detailsComponentLookup[detailsComponentKey];

  const onDrawerContentClick = (category) => {
    setDrawerContentCategory(category);
    setDrawerContentType('Details');
  };

  return (
    <div>
      <SideDrawer>
        <DrawerContentComponent onDrawerContentClick={onDrawerContentClick} />
      </SideDrawer>
      {children}
    </div>
  );
};

const mapStateToProps = (state) => ({
  drawerContentCategory: state.getIn(['app', 'drawerContentCategory']),
  drawerContentType: state.getIn(['app', 'drawerContentType']),
});

export default connect(mapStateToProps, {
  setDrawerContentType,
  setDrawerContentCategory,
})(AppLayout);
