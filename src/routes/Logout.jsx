import React from 'react';
import store from 'store2';
import { Navigate } from 'react-router-dom';

const Logout = () => {
  store.set('isAuth', false);
  return <Navigate to={'/home'} />;
};

export default Logout;
