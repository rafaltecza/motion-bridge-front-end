import Lottie from "react-lottie-player";
import {useEffect, useState} from "react";

const AnimationPreview = ({ isAnimationLoaded, animation }) => {

    return (
        <>
        {
            isAnimationLoaded ? (
                <Lottie className={"mx-auto"}
                        animationData={animation}
                        key={animation}
                        data
                        play
                        rendererSettings={{
                            preserveAspectRatio: "xMidYMid slice"
                        }}
                        loop
                        style={{ width: 450, height: 450 }}/>
            ) : (
                <div className={"mx-auto"}>Loading...</div>
            )
        }
        </>
    );
}

export default AnimationPreview;