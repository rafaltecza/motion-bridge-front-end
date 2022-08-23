import LoginFormView from "./LoginFormView";
import {useMutation} from "@tanstack/react-query";
import useHandleApiError from "../../../hooks/useHandleApiError";
import signIn from "../../sign-in";

const Yup = require("yup");
const {useEffect} = require("react");
const {useUserContext} = require("../../../providers/UserContextProvider");

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
});

const LoginFormContainer = (props) => {
    const handleApiError = useHandleApiError();
    const { setUser, removeUser } = useUserContext();

    const login = useMutation(signIn)
    const signOut = () => removeUser();

    useEffect(() => {
        signOut();
    }, []);

    const onSuccess = async (data) => {
        console.log("HELLO");
        console.log(data.response.response.data.error);
        console.log(data.response.response.data.message);
        console.log(data.response.response.data.path);
        console.log(data.response.response.data.status);
        console.log(data.response.response.data.timestamp);
        const token = '???';
        setUser(token)
        //push
    }

    const onError = (error) => {
        console.log("HELLO 2");
        console.log(error.response.data.error);
        console.log(error.response.data.message);
        console.log(error.response.data.path);
        console.log(error.response.data.status);
        console.log(error.response.data.timestamp);
        handleApiError(error);
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        await login.mutateAsync(
            {
                email: values.email,
                password: values.password,
            }, {
                onSuccess,
                onError,
                onSettled: () => setSubmitting(false)
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