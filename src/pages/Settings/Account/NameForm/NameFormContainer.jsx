import {useMutation} from "@tanstack/react-query";
import signIn from "../../../sign-in";
import useHandleApiError from "../../../../hooks/useHandleApiError";
import {useUserContext} from "../../../../providers/UserContextProvider";
import * as React from "react";
import NameFormView from "./NameFormView";

const Yup = require("yup");

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
});

const NameFormContainer = (props) => {
    const handleApiError = useHandleApiError();
    const { setUser, removeUser } = useUserContext();

    const login = useMutation(signIn)
    const signOut = () => removeUser();

    const onSuccess = async (data) => {
        signOut();
    }

    const onError = (error) => {
        handleApiError(error);
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        await login.mutateAsync(
            {
                name: values.name,
            }, {
                onSuccess,
                onError,
                onSettled: () => setSubmitting(false)
            }
        )
        setSubmitting(false);
    }

    return <NameFormView
        {...props}
        isLoading={login.isLoading}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    />;
}

export default NameFormContainer;