import LoginFormView from "./LoginFormView";
import {signIn} from "../../../api/user";
import {useMutation} from "@tanstack/react-query";

const Yup = require("yup");
const useHandleApiError = require("../../../hooks/useHandleApiError");
const {useEffect} = require("react");
const {useUserContext} = require("../../../providers/UserContextProvider");
const _ = require('lodash');

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
});

const LoginFormContainer = (props) => {
    const handleApiError = useHandleApiError;
    const { setUser, removeUser } = useUserContext();

    const login = useMutation(signIn)
    const signOut = () => removeUser();

    useEffect(() => {
        signOut();
    }, []);

    const onSuccess = async (data) => {
        const token = _.include(data, 'data.access_token')
        setUser(token)
        //push
    }

    const onError = (error) => {
        handleApiError(error);
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        await login.mutateAsync(
            {
                variables: {
                    email: values.email,
                    password: values.password,
                },
                onSuccess,
                onError,
            }
        )
        setSubmitting(false);
    }

    return <LoginFormView
        {...props}
        isLoading={login.isLoading}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    />;
}

export default LoginFormContainer;