import React from "react";
import Slider from "../components/Slider";
import Title from "../components/Text/Title";
import {ParallaxProvider} from "react-scroll-parallax";
import {SliderContent, SliderTitle} from "../components/Slider/SliderElements";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";


const Home = () => {
    const content = [];
    return (
        <>
            <Slider slides={[
                {
                    content: <div className={"container py-5"}>
                        <div className={"row py-5"}>
                            <div className={"col-6 text-white"}>
                                <SliderTitle>Product 1</SliderTitle>
                                <SliderContent>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</SliderContent>
                            </div>
                        </div>
                    </div>,
                    classes: "slide-color-1"
                },
                {
                    content: <div className={"container py-5"}>
                        <div className={"row py-5"}>
                            <div className={"col-6 text-white"}>
                                <SliderTitle>Product 2</SliderTitle>
                                <SliderContent>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</SliderContent>
                            </div>
                        </div>
                    </div>,
                    classes: "slide-color-2"
                },
                {
                    content: <div className={"container py-5"}>
                        <div className={"row py-5"}>
                            <div className={"col-6 text-white"}>
                                <SliderTitle>Product 3</SliderTitle>
                                <SliderContent>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</SliderContent>
                            </div>
                        </div>
                    </div>,
                    classes: "slide-color-3"
                }
            ]}/>

            // Take content array and sort alphabetically


            <div className={"row justify-content-center"} style={{
                minHeight: "90vh"
            }}>
                <div className={"col text-center"}>
                    <ParallaxProvider>
                        <Title textColor={"text-white"}>How it works?</Title>
                    </ParallaxProvider>
                    <ParallaxProvider>
                        <div className={"container"}>
                            <Grid container spacing={3}>
                                <Grid item sm={4}>
                                    <Box bgcolor={"darkgray"} height={200}>{content[0]}</Box>
                                </Grid>
                                <Grid item sm={4}>
                                    <Box bgcolor={"darkgray"} height={200}>{content[1]}</Box>
                                </Grid>
                                <Grid item sm={4}>
                                    <Box bgcolor={"darkgray"} height={200}>{content[2]}</Box>
                                </Grid>
                            </Grid>
                        </div>
                    </ParallaxProvider>

                </div>
            </div>
        </>
    );
};

export default Home;
