import AddProductFormView from "./AddProductFormView";
import {signIn,getProducts,addProduct} from "../../../api/user";
import {useMutation} from "@tanstack/react-query";
import useHandleApiError from "../../../hooks/useHandleApiError";


const Yup = require("yup");
const {useEffect} = require("react");
const {useUserContext} = require("../../../providers/UserContextProvider");

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    animationQuantity: Yup.string()
        .required('Quantity is required'),
    currency: Yup.string()
        .required('Currency is required'),
    timePeriod: Yup.string()
        .required('Time period is required'),
    price: Yup.string()
        .required('Price is required'),
});

const AddProductFormContainer = (props) => {
    const handleApiError = useHandleApiError();
    const add = useMutation(addProduct)


    useEffect(() => {

    }, []);

    const onSuccess = async (data) => {

        console.log("Produkt Dodany");
        console.log(data);
        //push
    }

    const onError = (error) => {
        console.log("ERROR :(");

        console.log(error.response.data.error);
        console.log(error.response.data.message);
        console.log(error.response.data.path);
        console.log(error.response.data.status);
        console.log(error.response.data.timestamp);
        handleApiError(error);
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        await add.mutateAsync(
            {
                animationQuantity: values.animationQuantity,
                name: values.name,
                currency: values.currency,
                timePeriod: values.timePeriod,
                price: values.price,
            }, {
                onSuccess,
                onError,
                onSettled: () => setSubmitting(false)
            }
        )
        setSubmitting(false);
    }

    return <AddProductFormView
        {...props}
        isLoading={add.isLoading}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    />;
}

export default AddProductFormContainer;