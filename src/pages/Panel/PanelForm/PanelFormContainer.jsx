import useHandleApiError from "../../../hooks/useHandleApiError";
import PanelFormView from "./PanelFormView";
import {factoryClient} from "../../../api/factory";

const Yup = require("yup");


const PanelFormContainer = (props) => {
    const handleApiError = useHandleApiError();
    const { productForm, setFormState } = props;

    const validationSchema = Yup.object().shape(
        productForm.form.map((valueObject, index) => {
            return {
                [valueObject.valueName]: valueObject?.validationSchema,
            }
        }),
    );

    const onSuccess = (data) => {
        console.log("NEXT");
        console.log(data);
        setFormState(formState => formState + 1);
    }

    const onBack = (data) => {
        console.log("BACK");
        console.log(data);
        setFormState(formState => formState - 1);
    }

    const onError = (error) => {
        handleApiError(error);
    }

    const handleRender = async (data) => {
        console.log("RENDER");
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
            props.setRenderURL(`http://localhost:3001/render/${dataJson.animationConfiguration.fileName}.${dataJson.animationConfiguration.extension}`);
        }).catch(error => {
            onError(error);
        });
    }


    const handleSubmit = (values, { setSubmitting }) => {
        console.log("ELOO");
        onSuccess();
        setSubmitting(false);
    }

    const handleBack = (values) => {
        console.log("ELOO");
        onBack();
    }

    console.log("HALLO");
    console.log(productForm.id);
    console.log(productForm.form.length);
    return <PanelFormView
        {...props}
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