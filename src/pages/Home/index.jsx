import React from "react";
import Slider from "../../components/Slider";
import Title from "../../components/Text/Title";
import {ParallaxProvider} from "react-scroll-parallax";
import {SliderContent, SliderTitle} from "../../components/Slider/SliderElements";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Lottie from "react-lottie-player";
import ProductParameters from "../../components/Product/Parameters";
import ProductProperties from "../../components/Product/Parameters";
import ButtonBlop from "../../components/Button/Blop";
import {useNavigate} from "react-router-dom";


const HomePage = () => {
    const content = [];
    const navigate = useNavigate();
    const info = [
        {
            title: 'test1'
        },
        {
            title: 'test2'
        },
        {
            title: 'test3'
        },
        {
            title: 'test4'
        },
    ]

    const navigateProducts = () => {
        navigate('/products');
    }

    return (
        <>
            <Slider slides={[
                {
                    title: "JUST LANDED",
                    content: "With us, you will expand your reach on shared social platforms. Personalize and customize rendered animations and reduce your working time to an absolute minimum.",
                    preview: "default/motionbridgehome.png",
                    classes: "slide-color-2",
                    button: <ButtonBlop className={"blob-btn-border-gold-md"} onClick={() => navigateProducts()}>Discover</ButtonBlop>,
                }
            ]}/>

            <div className={"row justify-content-center"} style={{
                minHeight: "15vh"
            }}>
                <div className={"col text-center"}>
                    <ParallaxProvider>
                        <Title textColor={"text-white mt-5"}>How it works?</Title>
                    </ParallaxProvider>
                </div>
            </div>

            <div className={"container"}>
                <Grid container>
                    { info && info.map((prop, index) => (
                        <Grid key={index} item xs={12} md={6} lg={3}>
                            <ProductProperties index={index} {...prop}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
};

export default HomePage;
