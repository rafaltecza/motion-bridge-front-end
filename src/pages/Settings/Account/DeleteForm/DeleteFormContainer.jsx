import {useMutation} from "@tanstack/react-query";
import signIn from "../../../sign-in";
import useHandleApiError from "../../../../hooks/useHandleApiError";
import DeleteFormView from "./DeleteFormView";
import {useUserContext} from "../../../../providers/UserContextProvider";

const Yup = require("yup");

const validationSchema = Yup.object().shape({
    confirmation: Yup.boolean().oneOf([true],'This checkbox is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
});

const DeleteFormContainer = (props) => {
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
                confirmation: values.confirmation,
                password: values.password,
            }, {
                onSuccess,
                onError,
                onSettled: () => setSubmitting(false)
            }
        )
        setSubmitting(false);
    }

    return <DeleteFormView
        {...props}
        isLoading={login.isLoading}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    />;
}

export default DeleteFormContainer;