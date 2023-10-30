import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../config/firebase"

export const signInUsingFirebase = async (userEmail, userPassword) => {
    const user = await signInWithEmailAndPassword(auth,userEmail,userPassword)
    return user;
}