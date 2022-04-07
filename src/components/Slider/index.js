import React from 'react';
import SwiperCore, {EffectCoverflow, Navigation, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import {SliderContent, SliderSlide, SliderTitle} from "./SliderElements";

SwiperCore.use([Navigation, Pagination]);

const Slider = () => {
    return (
        <>
                <Swiper
                    effect={"slide"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    pagination={true}
                    className="custom-swiper"
                    navigation={true}
                >
                    <SwiperSlide>
                        <SliderSlide className={"slide-color-1"}>
                            <div className={"container py-5"}>
                                <div className={"row py-5"}>
                                    <div className={"col-6 text-white"}>
                                        <SliderTitle>Product 1</SliderTitle>
                                        <SliderContent>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</SliderContent>
                                    </div>
                                </div>
                            </div>
                        </SliderSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderSlide className={"slide-color-2"}>
                            <div className={"container py-5"}>
                                <div className={"row py-5"}>
                                    <div className={"col-6 text-white"}>
                                        <SliderTitle>Product 2</SliderTitle>
                                        <SliderContent>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</SliderContent>
                                    </div>
                                </div>
                            </div>
                        </SliderSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderSlide className={"slide-color-3"}>
                            <div className={"container py-5"}>
                                <div className={"row py-5"}>
                                    <div className={"col-6 text-white"}>
                                        <SliderTitle>Product 3</SliderTitle>
                                        <SliderContent>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</SliderContent>
                                    </div>
                                </div>
                            </div>
                        </SliderSlide>
                    </SwiperSlide>
                </Swiper>
        </>
    );
};

export default Slider;
