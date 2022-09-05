import { useParallax } from 'react-scroll-parallax';
import React from 'react';

const Title = ({ textColor = 'text-white', parallax = false, children }) => {
    const { ref } = useParallax({ speed: 10, opacity: [0, 1, "easeOutSine"], translateY: [0, 20, "ease"]});

    if(!parallax) {
        return (
            <div ref={ref} className="my-thing position-relative" style={{
                top: "15%"
            }}>
                <h1 className={textColor}>{ children }</h1>
            </div>
        );
    } else {
        return (
            <div className="my-thing position-relative" style={{
                top: "15%"
            }}>
                <h1 className={textColor}>{ children }</h1>
            </div>
        );
    }


};

export default Title;
