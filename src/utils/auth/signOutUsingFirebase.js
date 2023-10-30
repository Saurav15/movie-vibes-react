import { signOut } from "firebase/auth"
import { auth } from "../../config/firebase"

export const signOutUsingFirebase = async () => {
    await signOut(auth)
}