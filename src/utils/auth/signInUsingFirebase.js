import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

/**
 * Signs in a user using Firebase Authentication.
 *
 * @param {string} userEmail - The user's email address.
 * @param {string} userPassword - The user's password.
 * @returns {Promise} A promise that resolves when the user is successfully signed in.
 */
export const signInUsingFirebase = async (userEmail, userPassword) => {
  const user = await signInWithEmailAndPassword(auth, userEmail, userPassword);
  return user;
};
