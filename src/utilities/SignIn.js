import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getAuth, signOut } from "firebase/auth"
import { fire } from "../config/firebaseConfig"
import { updateCreds, updateUser } from "../redux/actions"
const provider = new GoogleAuthProvider()

export const login = (dispatch) => {
    const auth = getAuth(fire)
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log({ result })
            const credential = GoogleAuthProvider.credentialFromResult(result)
            console.log({ credential })
            dispatch(updateCreds(credential))
            dispatch(updateUser(result))
            // const token = credential.accessToken
            // const user = result.user
        })
        .catch((error) => {
            console.log(error)
            // const errorCode = error.code
            // const errorMessage = error.message
            // const email = error.customData.email
            // const credential = GoogleAuthProvider.credentialFromError(error)
        })
}
export const logout = (dispatch) => {
    // const auth = getAuth()
    // signOut(auth)
    //     .then(() => {})
    //     .catch((error) => {})
    fire.auth().signOut()
}
