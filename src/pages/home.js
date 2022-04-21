import React from "react";
import Slider from "../components/Slider";
import Title from "../components/Text/Title";
import {ParallaxProvider} from "react-scroll-parallax";


const Home = () => {
    return (
        <>
            <Slider/>
            <div className={"row justify-content-center"} style={{
                minHeight: "90vh"
            }}>
                <div className={"col text-center"}>
                    <ParallaxProvider>
                        <Title textColor={"text-white"}>How it works?</Title>
                    </ParallaxProvider>
                </div>
            </div>
        </>
    );
};

export default Home;
