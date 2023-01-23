import React from "react";
import GoogleIcon from "../images/google-icon.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <div className="min-h-screen">
      <div className="container py-20">
        <h2 className="text-center text-2xl lg:text-3xl mb-10">
          Please Login!!
        </h2>
        <div className="login-wrapper w-2/5 mx-auto">
          <div className="text-center">
            <button
              onClick={() => signInWithGoogle()}
              className="mx-auto flex items-center bg-gray-200 px-8 py-4 rounded-lg"
            >
              <span>Login with</span>
              <img src={GoogleIcon} alt="Google Icon" className="ml-4 w-6" />
            </button>
          </div>
          <div className="text-center font-bold text-xl my-10">Or</div>
          <div>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Your Email"
                className="mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
              />
              <input
                type="password"
                placeholder="Your Password"
                className="mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
              />
              <button className="bg-sky-400 hover:bg-sky-500 transition-colors rounded-md px-10 py-4 text-lg text-white">
                Login
              </button>
            </form>
          </div>
          <div className="text-center mt-8">
            <span>Don't have an account?</span>
            <NavLink
              to="/registration"
              className="font-semibold underline ml-2 text-red-500"
            >
              Register Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
