import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import App from './App';
import ErrorPage from './ErrorPage';
import Meme from './routes/Meme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import Home from './routes/Home';
import PrivateRoute from './routes/PrivateRoute';
import Logout from './routes/Logout';

const router = createBrowserRouter([
  {
    exact: true,
    element: <PrivateRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Root />,
        children: [
          {
            path: 'meme/:memeId',
            element: <Meme />,
          },
          {
            path: '/',
            element: <App />,
          },
        ],
      },
    ],
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
