import {useMutation} from "@tanstack/react-query";
import {changePassword} from "../../../../api/backend/auth";
import useHandleApiError from "../../../../hooks/useHandleApiError";
import * as React from "react";
import PasswordFormView from "./PasswordFormView";
import useHandleApiSuccess from "../../../../hooks/useHandleApiSuccess";


const Yup = require("yup");
const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
        .required('Old password is required')
        .min(6, 'Password must be at least 6 characters long'),
    password: Yup.string()
        .required('New password is required')
        .min(6, 'Password must be at least 6 characters long'),
    repeatPassword: Yup.string()
        .required('New password repeat is required')
        .min(6, 'Password must be at least 6 characters long')
        .oneOf([Yup.ref("password")], "Both password need to be the same")

});

const PasswordFormContainer = (props) => {
    const handleApiError = useHandleApiError();
    const handleApiSuccess = useHandleApiSuccess();
    const change = useMutation(changePassword)


    const onSuccess = async (data) => {
        handleApiSuccess();
        console.log("Success")
    }

    const onError = (error) => {
        console.log("Error")
        handleApiError(error);
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        await change.mutateAsync(
            {
                password : values.password,
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
        isLoading={change.isLoading}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    />;
}

export default PasswordFormContainer;