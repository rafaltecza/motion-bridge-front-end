import {signIn, signUp} from "../../../api/user";
import {useMutation} from "@tanstack/react-query";
import useHandleApiError from "../../../hooks/useHandleApiError";
import RegisterFormView from "./RegisterFormView";

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
    // acceptedTerms: Yup.boolean()
    //     .oneOf([true], 'You must accept the terms and conditions')
    //     .required('You must accept the terms and conditions'),
    // acceptNewsletter: Yup.boolean()
    //     .oneOf([true], 'You must accept the newsletter')
    //     .required('You must accept the newsletter'),
});

const RegisterFormContainer = (props) => {
    const handleApiError = useHandleApiError();
    const { setUser, removeUser } = useUserContext();

    const register = useMutation(signUp)
    const signOut = () => removeUser();

    useEffect(() => {
        signOut();
    }, []);

    const onSuccess = async (data) => {
        console.log("HELLO");
        console.log(data)
        const token = '???';
        setUser(token)
        //push
    }

    const onError = (error) => {
        console.log("HELLO 2");
        console.log(error)
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