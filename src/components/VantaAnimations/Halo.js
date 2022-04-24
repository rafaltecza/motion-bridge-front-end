import { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";

export default function Holo(props) {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                HALO({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 100.0,
                    minWidth: 100.0,
                    amplitudeFactor: 0,
                    xOffset: 0.22,
                    size: 2,
                    backgroundColor: 0x0,
                    baseColor: 0x0
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);
    return (
        <section className={props.className} ref={myRef}>
            {props.children}
        </section>
    );
}
