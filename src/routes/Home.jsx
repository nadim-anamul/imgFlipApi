import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import store from 'store2';

const Home = () => {
  const navigate = useNavigate();
  const password = useRef(null);
  const email = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    if (userEmail === 'admin@braincraftapps.com' && userPassword === '@adminBrainCraft') {
      store.set('isAuth', true);
      navigate('/');
    } else {
      store.set('isAuth', false);
      navigate('/');
    }
  };
  return (
    <>
      <div className="loginForm">
        <div className="container">
          <div className="row">
            <h1 className="mb-3 mb-lg-4 text-center">Please sign in</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  ref={email}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  ref={password}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
