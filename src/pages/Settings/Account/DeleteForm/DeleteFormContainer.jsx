import {useMutation} from "@tanstack/react-query";
import useHandleApiError from "../../../../hooks/useHandleApiError";
import DeleteFormView from "./DeleteFormView";
import {useUserContext} from "../../../../providers/UserContextProvider";
import {deleteUser} from "../../../../api/backend/auth";

const Yup = require("yup");

const validationSchema = Yup.object().shape({
    confirmation:  Yup.boolean().oneOf([true],'This checkbox is required'),

    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
});

const DeleteFormContainer = (props) => {
    const handleApiError = useHandleApiError();
    const { setUser, removeUser } = useUserContext();

    const deleteAccount = useMutation(deleteUser)
    const signOut = () => removeUser();

    const onSuccess = async (data) => {
        console.log("Success")
        signOut();
    }

    const onError = (error) => {
        handleApiError(error);
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        await deleteAccount.mutateAsync(
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
        isLoading={deleteAccount.isLoading}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    />;
}

export default DeleteFormContainer;