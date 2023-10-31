import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../config/firebase";

/**
 * Signs up a new user using Firebase Authentication.
 *
 * @param {string} fullName - The full name of the user.
 * @param {string} userEmail - The email of the user.
 * @param {string} userPassword - The password for the new account.
 * @returns {Promise} A promise that resolves to the user object upon successful sign-up.
 */
export const signUpUsingFirebase = async (
  fullName,
  userEmail,
  userPassword
) => {
  const user = await createUserWithEmailAndPassword(
    auth,
    userEmail,
    userPassword
  );

  if (user) {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await updateProfile(user, { displayName: fullName });
      }
    });
  }

  return user;
};
