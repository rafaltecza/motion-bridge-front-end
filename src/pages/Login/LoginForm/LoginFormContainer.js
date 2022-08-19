import LoginFormView from "./LoginFormView";
import {signIn} from "../../../api/user";
import {useMutation} from "@tanstack/react-query";
import useHandleApiError from "../../../hooks/useHandleApiError";

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
        console.log(data.response.headers["set-cookies"]);
        console.log(data.response.headers["set-cookie"]);
        const token = '???';
        setUser(token)
        //push
    }

    const onError = (error) => {
        console.log(error)
        console.log(error.response.headers["set-cookies"])
        console.log(error.response.headers.map["set-cookies"])
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