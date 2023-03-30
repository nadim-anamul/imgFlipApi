import React from 'react';
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <div className="container">
        <div className="row">
          <div className="col-12 my-5">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
