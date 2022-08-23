import {useMutation} from "@tanstack/react-query";
import useHandleApiError from "../../../hooks/useHandleApiError";
import RegisterFormView from "./RegisterFormView";
import useHandleApiSuccess from "../../../hooks/useHandleApiSuccess";
import {useNavigate} from "react-router-dom";
import {useSnackbar} from "notistack";
import signUp from "../../sign-up";

const Yup = require("yup");
const {useEffect} = require("react");
const {useUserContext} = require("../../../providers/UserContextProvider");

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    acceptedTerms: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('You must accept the terms and conditions'),
    // acceptNewsletter: Yup.boolean()
    //     .oneOf([true], 'You must accept the newsletter')
    //     .required('You must accept the newsletter'),
});

const RegisterFormContainer = (props) => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleApiError = useHandleApiError();
    const handleApiSuccess = useHandleApiSuccess();
    const { setUser, removeUser } = useUserContext();

    const register = useMutation(signUp)
    const signOut = () => removeUser();

    useEffect(() => {
        signOut();
    }, []);

    const onSuccess = async (data) => {
        enqueueSnackbar("Account created, please check your mailbox to activate account.", {
            variant: 'success',
            autoHideDuration: 5000,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'center',
            },
        });
        navigate("/");
    }

    const onError = (error) => {
        handleApiError(error);
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        await register.mutateAsync(
            {
                name: values.name,
                email: values.email,
                password: values.password,
                acceptedTerms: values.acceptedTerms,
                acceptedNewsletter: values.acceptedNewsletter,
            }, {
                onSuccess,
                onError,
                onSettled: () => setSubmitting(false)
            }
        )
        setSubmitting(false);
    }

    return <RegisterFormView
        {...props}
        isLoading={register.isLoading}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    />;
}

export default RegisterFormContainer;