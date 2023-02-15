import React from 'react';
import { useRoutes } from 'react-router-dom';

// import { publicRoutes } from './public';

export const AppRoutes = () => {
  
  // const commonRoutes = [{path: '/', element: <Landing />}]
  const commonRoutes = []

  const element = useRoutes([...commonRoutes]);

  return <>{element}</>
};