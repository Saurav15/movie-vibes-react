import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../../config/firebase";

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
        if(user){
            await updateProfile(user,{displayName:fullName})
        }
    });
  }
  return user;
};
