import LoginFormView from "./LoginFormView";
import {useMutation} from "@tanstack/react-query";
import useHandleApiError from "../../../hooks/useHandleApiError";
import {signIn} from "../../../api/backend/auth";
import useHandleApiSuccess from "../../../hooks/useHandleApiSuccess";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

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
    const navigate = useNavigate();
    const handleApiError = useHandleApiError();
    const handleSuccess = useHandleApiSuccess();
    const { setUser, removeUser } = useUserContext();

    const login = useMutation(signIn)
    const signOut = () => removeUser();

    // const [packet, setPacket] = useState('');
    // useEffect(() => {
    //     const fetchData = async () =>
    //         await login
    //             .mutateAsync({
    //                 email: 'designrafaelpl@gmail.com',
    //                 password: 'qweqweqwe',
    //             })
    //             .then(data => {
    //                 console.log(data);
    //                 handleSuccess(data);
    //                 setUser(data.data);
    //                 navigate("/");
    //             }).catch(error => {
    //                 handleApiError(error);
    //             }
    //         );
    //     fetchData();
    // }, [packet]);

    useEffect(() => {
        signOut();
    }, []);

    const onSuccess = async (data) => {
        const authorization = data?.headers?.authorization;
        if (authorization.length > 0) {
            const token = authorization.toString().split(' ')[1];
            setUser(token)
            navigate("/");
        }
    }

    const onError = (error) => {
        // console.log("HELLO 2");
        // console.log(error.response.data.error);
        // console.log(error.response.data.message);
        // console.log(error.response.data.path);
        // console.log(error.response.data.status);
        // console.log(error.response.data.timestamp);
        // handleApiError(error);
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