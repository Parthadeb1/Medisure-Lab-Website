import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SignIn = () => {
  const { signInUsingGoogle } = useAuth();

  return (
    <div className="container">
      <div className=" d-flex flex-column justify-content-center align-items-center mt-3">
        <h1 className="fs-1 fw-bold">
          Medi<span className="text-danger">Health</span>{" "}
        </h1>
        <form className="w-50 mx-auto">
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
            <button
              type="submit"
              className="btn btn-info fw-bold text-dark fs-5 w-100"
            >
              SignIn
            </button>
          </div>
          <div className="mt-4">
            <Link to="/signup">
              <p className="text-danger text-center fs-5">Need an account ?</p>
            </Link>
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            <button
              onClick={signInUsingGoogle}
              type="button"
              className="btn btn-light text-dark fs-5 fw-normal w-100"
            >
              Sign In With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
