import { auth } from "@/config/firebase-config"
import { FirebaseError } from "firebase/app"
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
 } from "firebase/auth"

export const firebaseCreateUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return { data: userCredential.user }
    } catch (error) {

        const firebaseError = error as FirebaseError

        return { error: {
            code: firebaseError.code,
            message: firebaseError.message
        }}
    }
}

export const firebaseSignInUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return { data: userCredential.user }
    } catch (error) {

        const firebaseError = error as FirebaseError

        return { error: {
            code: firebaseError.code,
            message: firebaseError.message
        }}
    }
}

export const firebaseLogoutUser = async () => {
    try {
        await signOut(auth)
        return { data: true }
    } catch (error) {

        const firebaseError = error as FirebaseError

        return { error: {
            code: firebaseError.code,
            message: firebaseError.message
        }}
    }
}

export const firebaseResetPasswordUser = async (email: string) => {
    try {
        const userCredential = await sendPasswordResetEmail(auth, email)
        return { data: true }
    } catch (error) {

        const firebaseError = error as FirebaseError

        return { error: {
            code: firebaseError.code,
            message: firebaseError.message
        }}
    }
}