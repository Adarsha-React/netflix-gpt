import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSignInUp = () => {
    const message = validateFormData(
      fullName?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-4/12 my-36 mx-auto right-0 left-0 p-12 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="text-xl font-bold mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            className="w-full p-3 my-2 bg-zinc-500 outline-none font-semibold text-sm rounded-md"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="w-full p-3 my-2 bg-zinc-500 outline-none font-semibold text-sm rounded-md"
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="w-full p-3 my-2 bg-zinc-500 outline-none font-semibold text-sm rounded-md"
          type="password"
          placeholder="Password"
        />

        <p className="text-red-700 font-bold text-sm">{errorMessage}</p>
        <button
          className="w-full p-2 my-4 bg-red-800 rounded-lg"
          onClick={handleSignInUp}
        >
          {isSignInForm ? " Sign In" : "Sign Up"}
        </button>

        <p
          className="py-4 cursor-pointer text-sm font-bold"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already regiestered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
