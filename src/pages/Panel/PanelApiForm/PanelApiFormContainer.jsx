import useHandleApiError from "../../../hooks/useHandleApiError";
import PanelFormView from "./PanelApiFormView";
import {factoryClient} from "../../../api/factory";
import {useMutation, useQuery} from "@tanstack/react-query";
import {requestInstagram, requestSubscriptions} from "../../../api/backend/user";
import {useEffect, useState} from "react";
import PanelFormView2 from "./PanelApiFormView";
import {postProduct} from "../../../api/backend/products";
import {Animation, Layer, LayerType} from '@lottiefiles/lottie-js';

const Yup = require("yup");


const PanelApiFormContainer = (props) => {
    const handleApiError = useHandleApiError();

    const {
        productForm,
        setFormState,
        instagramUser,
        setInstagramData,
        setInstagramUser,
        setCurrentAnimation,
        currentAnimation,
        setCurrentlyRefreshing,
        isCurrentlyRefreshing,
        setIsLoadingApiData,
        isLoadingApiData,
    } = props;

    const [isLoading, setIsLoading] = useState(false);
    const add = useMutation(requestInstagram)
    const [submitting, setSubmitting] = useState(false);



    const onSuccess = (data) => {
        setCurrentlyRefreshing(true);

        setInstagramUser(data?.data?.photos);
        setInstagramData(data?.data?.username);

        async function loadAnimation() {
            // Create Lottie instance
            // (you can also use Animation.fromJSON method if you already have the Lottie JSON loaded)
            const tet = new Animation();
            let anim = tet.fromJSON(currentAnimation);
            console.log("HERERE!!");
            // const newLayer = anim.layers[1].toJSON();
            // newLayer.t.textDocument.values[0].value.text = data?.data?.username;
            // console.log(newLayer);
            //
            // anim.createLayerFromJSON(newLayer);
            //
            // console.log(anim.layers);
            // anim.layers[1].fromJSON(newLayer);
            // // anim.createLayer(LayerType.TEXT).fromJSON(currentAnimation.layers[1].toJSON());
            // // anim.
            // const createdLayer = anim.createLayer(LayerType.TEXT);

            console.log('name', anim.layers[1].name);
            console.log('name2', anim.layers[1].textData?.textDocument?.values[0].value?.text);
            console.log('name3', anim.layers[1].matchName);

            // // Print some data of the animation
            // console.log('Frame Rate', anim.frameRate);
            // console.log('Number of Layers', anim.layers.length);
            // console.log(anim.colors);

            // Manipulate animation
            // anim.layers[1].textData?.textDocument?.values[0].value?.text = instagramData;

            anim.layers[1].name = data?.data?.username;

           let preAnimation = currentAnimation;
           console.log(preAnimation);
           preAnimation.layers[6].t.d.k[0].s.t = data?.data?.username;
           // preAnimation.assets[0].u = "";

           //get resource from link and save in assets
            const response = await fetch(`http://localhost:8080/${data?.data?.photos[0].photoUrl}`);
            const blob = await response.blob();
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function() {
                console.log(reader.result);
                preAnimation.assets[1].p = reader.result;
            }

           // preAnimation.layers[3] = createdLayer.toJSON();

            // anim.layers[1].textData?.textDocument?.values[0].value?.text = data?.data?.username;
            // Get the new JSON
            // const woohooLottie = JSON.stringify(anim);
            // console.log(woohooLottie);
            console.log('final');
            console.log(preAnimation);
            setCurrentAnimation(preAnimation);

            setTimeout(() => {
                setCurrentlyRefreshing(false);
            }, 3000);
            setIsLoadingApiData(false);
        }
        loadAnimation();

        // let newjson = JSON.stringify(currentAnimation);
        // newjson = newjson.replaceAll("test", data?.data?.username);
        // console.log(JSON.parse(newjson));
        //
        // setCurrentAnimation(JSON.parse(newjson));
    }

    const onError = (data) => {
        console.log(data);
        setIsLoadingApiData(false);

        data = {
            response: {
                data: {
                    message: "Cannot connect with API"
                }
            }
        }
        handleApiError(data);
    }

    const handleSubmit = async (values) => {
        setIsLoadingApiData(true);
        await add.mutateAsync(
            {
                profile: values?.username,
                subscriptionId: 11
            }, {
                onSuccess,
                onError,
                onSettled: () => setSubmitting(false)
            }
        )
        setSubmitting(false);
    }

    return (
        <PanelFormView2
            {...props}
            productForm={productForm}
            onSubmit={handleSubmit}
            isLoading={props.isLoading}
            isLoadingApiData={isLoadingApiData}/>
    )
}

export default PanelApiFormContainer;