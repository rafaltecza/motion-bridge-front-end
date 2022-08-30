import {useMutation} from "@tanstack/react-query";
import useHandleApiError from "../../../hooks/useHandleApiError";
import * as React from "react";
import useHandleApiSuccess from "../../../hooks/useHandleApiSuccess";
import SetProductActiveFormView from "./SetProductActiveFormView";
import {setProductActive} from "../../../api/backend/auth";

const Yup = require("yup");
const validationSchema = Yup.object().shape({
    productId: Yup.string()
        .required('product Id is required')
});

const SetProductActiveFormContainer = (props) => {
    const handleApiError = useHandleApiError();
    const handleApiSuccess = useHandleApiSuccess();
    const setProduct = useMutation(setProductActive)

    const onSuccess = async (data,id) => {
        id = 12;
        console.log("Success")
    }

    const onError = (error) => {
        handleApiError(error);
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        await setProduct.mutateAsync(
            {
                productId: values.productId,
            }, {
                onSuccess,
                onError,
                onSettled: () => setSubmitting(false)
            }
        )
        setSubmitting(false);
    }

    return <SetProductActiveFormView
        {...props}
        isLoading={setProduct.isLoading}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    />;
}

export default SetProductActiveFormContainer;