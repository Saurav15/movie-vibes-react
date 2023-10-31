import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

/**
 * Signs out the currently authenticated user using Firebase Authentication.
 */
export const signOutUsingFirebase = async () => {
  await signOut(auth);
};
