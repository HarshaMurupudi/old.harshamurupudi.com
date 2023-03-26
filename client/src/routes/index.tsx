import React from 'react';
import { useRoutes } from 'react-router-dom';

// import { publicRoutes } from './public';

import { Landing } from '@/features/misc';
import PageNotFound from '@/features/404';
import AppLayout from '@/components/layout/AppLayout';

export const AppRoutes = () => {
  const commonRoutes = [
    {
      path: '*',
      element: (
        <AppLayout>
          <PageNotFound />
        </AppLayout>
      ),
    },
    {
      path: '/',
      element: (
        <AppLayout>
          <Landing />
        </AppLayout>
      ),
    },
  ];
  // const commonRoutes = []

  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};
