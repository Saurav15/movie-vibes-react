import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutUsingFirebase } from "../../utils/auth/signOutUsingFirebase";
import { removeUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

/**
 * Header component displaying the application header and sign-out button.
 */
function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Handles the sign-out process. Calls the signOutUsingFirebase function to sign the user out.
   */
  const handleSignout = async () => {
    try {
      // Sign the user out using Firebase
      await signOutUsingFirebase();

      // Dispatch the action to remove the user from the Redux store
      dispatch(removeUser());

      // Navigate to the home page after signing out
      navigate("/");
    } catch (error) {
      console.log("Signout Error:", error);
    }
  };

  return (
    <div className="absolute z-20 w-full py-2 px-10 bg-gradient-to-b from-black text-white flex justify-between">
      <img
        className="w-32"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Movie Vibes"
      />

      {user && (
        <div className="flex">
          <img
            className="w-9 mr-3 object-contain"
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp"
            alt="profile"
          />
          {/* <button
            className="bg-red-700 px-3 py-1 rounded-lg"
            onClick={handleSignout}
          >
            Sign Out
          </button> */}
        </div>
      )}
    </div>
  );
}

export default Header;
