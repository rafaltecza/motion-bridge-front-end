import React from 'react';
import SwiperCore, {Navigation, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import {SliderContent, SliderIcon, SliderSkip, SliderSlide, SliderTitle} from "./SliderElements";
import { FaAngleDown } from "react-icons/fa";
import {isArray} from "lodash";
import Box from "@mui/material/Box";

SwiperCore.use([Navigation, Pagination]);

const Slider = (slides, ...props) => {

    return (
        <div style={{
            fontFamily: "Poppins, serif"
        }} {...props}>

                <SliderIcon><Box mt={3} zIndex={10}><FaAngleDown/></Box></SliderIcon>


                <Swiper
                    effect={"slide"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    pagination={true}
                    className="custom-swiper"
                    navigation={true}
                >
                    { isArray(slides?.slides) && slides.slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <SliderSlide className={slide.classes}>
                                {slide.content}
                            </SliderSlide>
                        </SwiperSlide>
                    ))}

                </Swiper>
        </div>
    );
};

export default Slider;
