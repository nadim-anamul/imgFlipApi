import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import store from 'store2';

const PrivateRoute = () => {
  let isAuth = store.get('isAuth');
  return <div>{isAuth ? <Outlet /> : <Navigate to={'/home'} />}</div>;
};

export default PrivateRoute;
