import GetProductsListView from "./GetProductsListView";
import {useMutation} from "@tanstack/react-query";
import useHandleApiError from "../../../hooks/useHandleApiError";
import React from "react";
import ReactDOM from "react-dom";
import ProductDemo from "../../../components/Product/Demo";
import {getProducts} from "../../../api/backend/user";

const Yup = require("yup");
const {useEffect} = require("react");
const {useUserContext} = require("../../../providers/UserContextProvider");

const validationSchema = Yup.object().shape({
});

const GetProductsListContainer = (props) => {
    const handleApiError = useHandleApiError();
    const add = useMutation(getProducts)


    useEffect(() => {

    }, []);


    const renderingArrayOfObjects = (data) => {

        const listItems = data.map(
            (element) => {
                return (
                    <ul type="none">
                        <li >{
                            <ProductDemo name={"Profile Presenter"}
                            label={element.name}
                            price={element.price+""+element.currency+"/"+element.timePeriod}
                            content={"Some quick example text to build on the card title and make up the bulk of " +
                            "the card's content. Some quick example text to build on the card title and make up " +
                            "the bulk of the card's content. Some quick example text to build on the card title " +
                            "and make up the bulk of the card's content."}
                            backgroundType={"circle"}/>

                        }</li>
                    </ul>
                )
            }
        )
        ReactDOM.render(listItems, document.getElementById("all-products"));
    }

    const onSuccess = async (data) => {

        renderingArrayOfObjects(data.data);

    }

    const onError = (error) => {
        console.log("ERROR :(");
        handleApiError(error);
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        await add.mutateAsync(
            {
                email: values.email,
            }, {
                onSuccess,
                onError,
                onSettled: () => setSubmitting(false)
            }
        )
        setSubmitting(false);
    }

    return <GetProductsListView
        {...props}
        isLoading={add.isLoading}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    />;
}

export default GetProductsListContainer;