import {useMutation} from "@tanstack/react-query";
import useHandleApiError from "../../../../hooks/useHandleApiError";
import * as React from "react";
import NameFormView from "./NameFormView";
import useHandleApiSuccess from "../../../../hooks/useHandleApiSuccess";
import {changeName} from "../../../../api/backend/auth";

const Yup = require("yup");

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
});

const NameFormContainer = (props) => {
    const handleApiError = useHandleApiError();
    const handleApiSuccess = useHandleApiSuccess();
    const change = useMutation(changeName)

    const onSuccess = async (data) => {
        handleApiSuccess();
        console.log("Success")
    }


    const onError = (error) => {
        handleApiError(error);
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        await change.mutateAsync(
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
        isLoading={change.isLoading}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    />;
}

export default NameFormContainer;