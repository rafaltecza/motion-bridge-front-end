import React from 'react'
import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import Halo from "../components/VantaAnimation/Halo";
import ReactTypingEffect from 'react-typing-effect';
import {RegisterForm} from "./Register/RegisterForm";

const SignUp = () => {

    const TypingComponentStyles = {
        fontSize: "70%",
        top: "65%",
        position: "fixed",
        width: "70%",
        left: "15%"
    }

    return (
        <>
            <Halo className={"background-vanta"}/>
            <div className={"container"} style={{
                minHeight: '90vh',
                fontFamily: "Poppins, sans-serif"
            }}>
                <div>
                    <div className={"row mt-5 mb-4"}>
                        <div className={"col-12 col-md-6"}>
                            <div className={"card h-100 bg-transparent"}>
                                <div className={"card-body px-5 py-4 z-1 text-white"}>
                                    <span className={"line-title text-size-55"}>Increase standard</span>
                                    <span className={"line-title text-size-55"}> of your </span>
                                    <ReactTypingEffect
                                        text={["videos", "movies", "media", "stories", "bussiness"]}
                                        cursorRenderer={cursor => <span className={"line-title text-size-55"}>{cursor}</span>}
                                        displayTextRenderer={(text, i) => {
                                            return (
                                                <span className={"line-title text-size-55"}>{text}</span>
                                            );
                                        }}
                                        eraseDelay={2000}
                                        typingDelay={300}
                                    />
                                    <h1 className={"text-size-55"}> today.</h1>
                                </div>

                            </div>
                        </div>
                        <div className={"col-12 col-md-6"}>
                            <div className={"card card-mb py-4 px-4 h-100"}>
                                <div className={"card-body"}>
                                    <h3 className={"mb-4"}><b>Register</b></h3>
                                    <p>Don't have an account? Create one, it take less than a minute.</p>
                                    <RegisterForm/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
