import { LoginFormFielsType } from "@/types/forms"
import { useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { LoginView } from "./login.view"

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useToogle } from "@/hooks/use-toogle";
import { firebaseSignInUser } from "@/api/authentification";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginContainer = () => {

    const router = useRouter()

    const {
        value: isLoading, 
        setValue: setIsLoading, 
    } = useToogle()

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {

              const uid = user.uid;
    
            } else {
        
            }
          });
    }), []

    const {
        handleSubmit,
        formState: {errors},
        register,
        setError,
        reset
    } = useForm<LoginFormFielsType>()

    const handleSignInUser = async ({email, password}: LoginFormFielsType) => {
        const { error } = await firebaseSignInUser(email, password)
        if(error) {
            setIsLoading(false)
            toast.error(error.message)
            return
        }

        toast.success("Bienvenue sur Coders Monkeys")
        setIsLoading(false)
        reset()
        router.push("/mon-espace")
    }

    const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
       setIsLoading(true)
       const { password } = formData
       
       if (password.length <= 5){
            setError("password", {
                type: "manual",
                message: "Le mot de passe doit comporter au minimum 6 caractères"
            })
            setIsLoading(false)
            return
        }

        handleSignInUser(formData)
    }

    return (
        <LoginView
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit,
                isLoading
            }}
        />
    )
}