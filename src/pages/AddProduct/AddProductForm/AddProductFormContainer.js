import AddProductFormView from "./AddProductFormView";
import {useMutation} from "@tanstack/react-query";
import useHandleApiError from "../../../hooks/useHandleApiError";
import {postProduct} from "../../../api/backend/products";


const Yup = require("yup");
const {useEffect} = require("react");
const {useUserContext} = require("../../../providers/UserContextProvider");

const validationSchema = Yup.object().shape({

});

const AddProductFormContainer = (props) => {
    const handleApiError = useHandleApiError();
    const add = useMutation(postProduct)


    useEffect(() => {

    }, []);

    const onSuccess = async (data) => {
        //push
    }

    const onError = (error) => {
        handleApiError(error);
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        await add.mutateAsync(
            {
                type: values.type,
                title: values.title,
                currency: values.currency,
                timePeriod: values.timePeriod,
                animationQuantity: values.animationQuantity,
                price: values.price,
                background: values.background,

                presentations:[{
                    titlePresentations: values.titlePresentations,
                    contentPresentations: values.contentPresentations,
                    previewPresentations: values.previewPresentations,
                    classesPresentations: values.classesPresentations,
                }],

                parameters:[{
                    imageParameters: values.imageParameters,
                    subtitleParameters: values.subtitleParameters,
                    titleParameters: values.titleParameters,
                    contentParameters: values.contentParameters,
                }],





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