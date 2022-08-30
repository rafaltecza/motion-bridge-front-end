import useHandleApiError from "../../../hooks/useHandleApiError";
import PanelFormView from "./PanelFormView";
import {factoryClient} from "../../../api/factory";
import {useMutation, useQuery} from "@tanstack/react-query";
import {requestInstagram, requestSubscriptions} from "../../../api/backend/user";
import {useEffect, useState} from "react";
import PanelFormView2 from "./PanelFormView";
import {postProduct} from "../../../api/backend/products";
import { Animation } from '@lottiefiles/lottie-js';

const Yup = require("yup");


const PanelFormContainer = (props) => {
    const handleApiError = useHandleApiError();
    const { productForm, setFormState, instagramUser, setInstagramData, setInstagramUser, setCurrentAnimation, currentAnimation } = props;
    const [isLoading, setIsLoading] = useState(false);
    const add = useMutation(requestInstagram)
    const [submitting, setSubmitting] = useState(false);



    const onSuccess = (data) => {
        setInstagramUser(data?.data?.photos);
        setInstagramData(data?.data?.username);

        console.log('username', data?.data?.username);

        async function loadAnimation() {
            // Create Lottie instance
            // (you can also use Animation.fromJSON method if you already have the Lottie JSON loaded)
            const tet = new Animation();
            let anim = tet.fromJSON(currentAnimation);

            console.log('anim', anim);

            // Print some data of the animation
            console.log('Frame Rate', anim.frameRate);
            console.log('Number of Layers', anim.layers.length);
            console.log(anim.getColors());

            // Manipulate animation
            anim.name = 'Woohoo';
            anim.width = 512;
            anim.height = 512;

            // Get the new JSON
            const woohooLottie = JSON.stringify(anim);
            console.log(woohooLottie);
        }
        loadAnimation();

        let newjson = JSON.stringify(currentAnimation);
        newjson = newjson.replaceAll("test", data?.data?.username);
        console.log(JSON.parse(newjson));

        setCurrentAnimation(JSON.parse(newjson));
    }

    const onError = (data) => {
        console.log("ERROR")
        console.log(data);
    }

    const handleSubmit = async (values) => {
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
            isLoading={props.isLoading}/>
    )
}

export default PanelFormContainer;