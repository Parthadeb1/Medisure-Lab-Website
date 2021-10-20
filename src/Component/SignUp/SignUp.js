import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
            <div className="container">
             <div className=" d-flex flex-column justify-content-center align-items-center mt-3">
             <h1 className="fs-1 fw-bold mb-5">Create<span className="text-danger">New Account</span> </h1>
        <form className="w-50 mx-auto">
          <div className="mb-3">
            <input
              type="text"
              className="form-control p-3"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control p-3"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control p-3"
              placeholder="Password"
              required
            />
          </div>
          <div className="d-flex justify-content-center align-items-center ">
          <button type="submit" className="btn btn-info fw-bold text-dark fs-5 w-100">
            SignUp
          </button>
          </div>
          <div className="mt-4">
          <Link to="/signin">
                        <p className="text-danger text-center fs-6">Allready Have a Account?</p>
          </Link>
          </div>
          
        </form>
      </div>
        </div>
    );
};

export default SignUp;