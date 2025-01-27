import React, { useState } from "react";
import AppBackground from "./Assests/AppBackground.jpg";
import Header from "./Header";

const LoginSignUp = () => {
  const [isSignInForm, setISignInForm] = useState(true);

  const toggleSignInForm = () => {
    setISignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={AppBackground} alt="Logo" />
      </div>
      <form className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer py4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered. Sign in now!"}
        </p>
      </form>
    </div>
  );
};

export default LoginSignUp;
