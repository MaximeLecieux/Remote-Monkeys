import { SubmitHandler, useForm } from "react-hook-form"
import { RegisterView } from "./register.view"
import { RegisterFormFielsType } from "@/types/forms"
import { firebaseCreateUser } from "@/api/authentification";

import { toast } from 'react-toastify';
import { useToogle } from "@/hooks/use-toogle";

export const RegisterContainer = () => {

    const {
        value: isLoading, 
        setValue: setIsLoading, 
    } = useToogle()

    const {
        handleSubmit,
        formState: {errors},
        register,
        setError,
        reset
    } = useForm<RegisterFormFielsType>()

    const handleCreateUserAuthentification = async ({email, password, how_did_hear}: RegisterFormFielsType) => {
        const { error, data } = await firebaseCreateUser( email, password)
        if(error) {
            setIsLoading(false)
            toast.error(error.message)
            return
        }

        toast.success("Bienvenue sur l'app des singes codeurs !")
        setIsLoading(false)
        reset()
    }

    const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
       setIsLoading(true)

       const {password} = formData

       if (password.length <= 5){
            setError("password", {
                type: "manual",
                message: "Le mot de passe doit comporter au minimum 6 caractères"
            })
            setIsLoading(false)
            return
       }

       handleCreateUserAuthentification(formData)
    }

    return (
    <>  
        <RegisterView
        form={{
            errors,
            register,
            handleSubmit,
            onSubmit,
            isLoading
        }}
        />
    </>

    )
}