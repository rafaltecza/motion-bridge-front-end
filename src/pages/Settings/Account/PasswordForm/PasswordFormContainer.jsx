import {useMutation} from "@tanstack/react-query";
import signIn from "../../../sign-in";
import useHandleApiError from "../../../../hooks/useHandleApiError";
import {useUserContext} from "../../../../providers/UserContextProvider";
import * as React from "react";
import PasswordFormView from "./PasswordFormView";

const Yup = require("yup");

const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
        .required('Old password is required')
        .min(6, 'Password must be at least 6 characters long'),
    newPassword: Yup.string()
        .required('New password is required')
        .min(6, 'Password must be at least 6 characters long'),
    repeatNewPassword: Yup.string()
        .required('New password repeat is required')
        .min(6, 'Password must be at least 6 characters long')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const PasswordFormContainer = (props) => {
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
                oldPassword: values.oldPassword,
                newPassword: values.newPassword,
                repeatNewPassword: values.repeatNewPassword,
            }, {
                onSuccess,
                onError,
                onSettled: () => setSubmitting(false)
            }
        )
        setSubmitting(false);
    }

    return <PasswordFormView
        {...props}
        isLoading={login.isLoading}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    />;
}

export default PasswordFormContainer;