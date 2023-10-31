import React, { useRef, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  signInValidation,
  signUpValidation,
} from "../../utils/auth/signInSignUpValidation";
import { signUpUsingFirebase } from "../../utils/auth/signUpUsingFirebase";
import { signInUsingFirebase } from "../../utils/auth/signInUsingFirebase";
import { addUser } from "../../redux/userSlice";
import { useIsAuthenticated } from "../../hooks/isAuthenticatedHook";
import netflixBgImage from '../../assets/Netflix_bg_50.jpg'

/**
 * `LoginSignUp` is a React component responsible for rendering a sign-up or sign-in form.
 * @component
 */
function LoginSignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  // Determine the initial form type based on the route
  const setPageToLoginOrSignup = () => {
    if (location.pathname === "/signup") {
      return true;
    }
    return false;
  };

  const [isSignup, setIsSignUp] = useState(setPageToLoginOrSignup());
  const [errorMessage, setErrorMessage] = useState({});
  const [submittingForm, setSubmittingForm] = useState(false);
  const isAuthenticated = useIsAuthenticated();
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  /**
   * Toggles between sign-up and sign-in forms.
   */
  const handleFormChange = () => {
    setErrorMessage({});
    setIsSignUp((prevFormState) => !prevFormState);
  };

  /**
   * Handles form submission, performs input validation, and redirects to the browse page on success.
   * @param {Event} e - The form submission event.
   */
  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();

      // Enable form submission
      setSubmittingForm(true);

      // Get input values from refs
      const userFullName = fullName.current?.value;
      const userEmail = email.current.value;
      const userPassword = password.current.value;

      // Perform input validation based on the form type (sign-up or sign-in)
      const errorFromValidation = isSignup
        ? signUpValidation(userFullName, userEmail, userPassword)
        : signInValidation(userEmail, userPassword);

      // Set error message state
      setErrorMessage(errorFromValidation);

      // If no validation error exists then proceed with login/signup
      if (Object.keys(errorFromValidation).length === 0) {
        if (isSignup) {
          // Sign up the user using Firebase
          const { user } = await signUpUsingFirebase(
            userFullName,
            userEmail,
            userPassword
          );
          dispatch(
            addUser({
              fullName: user.displayName,
              email: user.email,
              accessToken: user.accessToken,
            })
          );
        } else {
          // Sign in the user using Firebase
          const { user } = await signInUsingFirebase(userEmail, userPassword);
          dispatch(
            addUser({
              fullName: user.displayName,
              email: user.email,
              accessToken: user.accessToken,
            })
          );
        }

        // If there are no errors, navigate to the browse page
        navigate("/browse");
      }

      // Disable form submission
      setSubmittingForm(false);
    } catch (error) {
      console.log(error);
      if (error.message.includes("auth/invalid-login-credentials")) {
        setErrorMessage({ somethingWentWrong: "Invalid email or password." });
      } else if (error.message.includes("auth/email-already-in-use")) {
        // Handle the specific error when email is already in use
        setErrorMessage({ somethingWentWrong: "User already exists." });
      } else {
        // Handle other errors
        setErrorMessage({ somethingWentWrong: "Something went wrong." });
      }

      // Disable form submission in case of error
      setSubmittingForm(false);
    }
  };

  // If user is already authenticated then redirect to the browse page
  if(isAuthenticated){
    return <Navigate to={'/browse'}/>
  }

  return (
    <>
      <div className="relative z-0 w-screen h-screen overflow-hidden">
        <img
          className="object-cover w-full h-full"
          // src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          src={netflixBgImage}
          alt="Background"
        ></img>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="absolute top-1/4 left-1/3 ml-16 w-1/4 bg-black bg-opacity-80 rounded-md p-6">
        <h3 className="text-white font-medium text-xl mb-4">
          {" "}
          {isSignup ? "Sign up" : "Sign In"}
        </h3>
        <form
          className="w-11/12 m-auto"
          onSubmit={handleFormSubmit}
          autoComplete="off"
        >
          {isSignup && (
            <>
              {errorMessage?.fullName && (
                <p className="text-yellow-700 text-sm ">
                  {"*" + errorMessage.fullName}
                </p>
              )}
              <input
                className="block px-5 py-3 w-full bg-slate-700 text-white text-sm rounded-md outline-none mb-5"
                type="text"
                placeholder="Full Name"
                autoFocus
                ref={fullName}
              />
            </>
          )}
          {errorMessage?.email && (
            <p className="text-yellow-700 text-sm ">
              {"*" + errorMessage.email}
            </p>
          )}
          <input
            className="block px-5 py-3 w-full bg-slate-700 text-white text-sm rounded-md outline-none mb-5"
            type="email"
            placeholder="Email address"
            autoComplete="off"
            ref={email}
          />
          {errorMessage?.password && (
            <p className="text-yellow-700 text-sm ">
              {"*" + errorMessage.password}
            </p>
          )}
          <input
            className="block px-5 py-3 w-full bg-slate-700 text-white text-sm rounded-md outline-none mb-0"
            type="password"
            placeholder="Password"
            ref={password}
          />
          {errorMessage?.somethingWentWrong && (
            <p className="text-yellow-700 mt-3 text-sm ">
              {"*" + errorMessage.somethingWentWrong}
            </p>
          )}
          <button
            className={`w-full bg-red-700 text-white mt-5 px-3 py-2.5 rounded-md disabled:opacity-70 disabled:cursor-wait hover:bg-red-800`}
            type="submit"
            disabled={submittingForm}
          >
            {isSignup ? "Sign up" : "Sign In"}
          </button>
          <p className=" mt-4 ml-1 text-sm text-gray-400">
            {isSignup ? "Already a customer ?" : "New to Netflix?"}
            <span
              className="text-white hover:cursor-pointer ml-1"
              onClick={handleFormChange}
            >
              {isSignup ? "Login" : "Sign up now"}
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default LoginSignUp;
