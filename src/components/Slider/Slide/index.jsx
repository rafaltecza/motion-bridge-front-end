import {SliderContent, SliderNavigation, SliderTitle} from "../SliderElements";
import ButtonBlop from "../../Button/Blop";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import {useNavigate} from "react-router-dom";

const Slide = ({slide, handleOrder, isSubscribed, isAlreadyAdded, ...props}) => {

    const navigate = useNavigate();
    const navigateCheckout = () => {
        navigate('/checkout');
    }
    const navigatePanel = () => {
        navigate(`/panel/${props.productId}`);
    }
    return (
        <>
            <div className={"container"}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <Box mt={20}>
                            <SliderTitle>{slide?.title}</SliderTitle>
                            <SliderContent>{slide?.content}</SliderContent>
                            <SliderNavigation>
                                { slide?.button ? slide.button : <ButtonBlop onClick={() => { if(isSubscribed) { return navigatePanel() } else if(!isAlreadyAdded) {return handleOrder()} else {return navigateCheckout()} }} className={isSubscribed ? "blob-btn-border-gold-md" : "blob-btn-border-gold-md"}>
                                    {isSubscribed ? "Panel" : isAlreadyAdded ? "Checkout" : "Subscribe"}</ButtonBlop>}
                            </SliderNavigation>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                            { slide.preview.startsWith("products") ?
                                (<video width="100%" autoPlay loop muted playsInline>
                                    <source src={`/images/${slide?.preview}`} type="video/webm"/></video>)
                                :
                                (<img className={"img-fluid"} src={`/images/${slide?.preview}`} alt=""/>)
                            }


                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default Slide;