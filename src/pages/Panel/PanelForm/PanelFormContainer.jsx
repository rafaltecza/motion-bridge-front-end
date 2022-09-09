import useHandleApiError from "../../../hooks/useHandleApiError";
import PanelFormView from "./PanelFormView";
import {factoryClient} from "../../../api/factory";
import {useCallback} from "react";
import {putSubscriptionsGenerate, putSubscriptionsStatus} from "../../../api/backend/user";

const Yup = require("yup");


const PanelFormContainer = (props) => {
    const handleApiError = useHandleApiError();
    const { productForm, formState, setFormState, instagramUser, setIsApiLoading } = props;

    const validationSchema = Yup.object().shape(
        productForm.form.map((valueObject, index) => {
            return {
                [valueObject.valueName]: valueObject?.validationSchema,
            }
        }),
    );

    const onSuccess = (data) => {
        console.log(data);
        setFormState(formState => formState + 1);
    }

    const onBack = (data) => {
        console.log(data);
        setFormState(formState => formState - 1);
    }

    const onError = (error) => {

        handleApiError(error);
    }

    const handleGenerateCounter = useCallback(async (subscriptionId) => {
        //fetch data to api using delete as deleteSubscription
        const fetchData = async () =>
            await putSubscriptionsGenerate(subscriptionId).then(data => {
                console.log(data);
            }).catch(error => {
                handleApiError(error);
            });
        fetchData();
    }, [putSubscriptionsGenerate, handleApiError]);

    const handleRender = async (data) => {
        console.log(data);

        data = () => {
            props.setLoading(true);
            return dataJson;
        }

        const dataJson = {
            lottieAnimation: props?.currentAnimation,
            animationConfiguration: {
                fileName: "test",
                extension: "mp4",
            }
        }

        await factoryClient.post("/render", data()).then(res => {
            console.log(res);
            props.setLoading(false);
            props.setIsRendered(true);
            handleGenerateCounter(props.subscriptionId);
            props.setRenderURL(`http://34.118.9.226:3001/renders/${dataJson.animationConfiguration.fileName}.${dataJson.animationConfiguration.extension}`);
        }).catch(error => {
            onError(error);
        });
    }


    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);

        if(productForm.id === productForm.form.length + 1) {
            handleRender(values);
        } else {
            onSuccess();
            setSubmitting(false);
        }
    }

    const handleBack = (values) => {
        onBack();
    }

    return <PanelFormView
        {...props}
        instagramUser={instagramUser}
        productForm={productForm}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        onBack={handleBack}
        onRender={handleRender}
        renderURL={props.renderURL}
        isLoading={props.isLoading}
        isRendered={props.isRendered}
        isLast={productForm.id === productForm.form.length + 1}
        isFirst={productForm.id === 0}
    />;
}

export default PanelFormContainer;