import React from 'react'
import RegisterForm from "../components/Form/RegisterForm/index_old_react_v4";
import LoginForm from "../components/Form/LoginForm";
import Halo from "../components/VantaAnimation/Halo";
import ReactTypingEffect from "react-typing-effect";


const SignIn = () => {
    return (
        <>
            <Halo className={"background-vanta"}/>
            <div className={"container"} style={{
                minHeight: '90vh',
                fontFamily: "Poppins, sans-serif"
            }}>
                <div>
                    <div className={"row my-4"}>
                        <div className={"col-12 col-md-6"}>
                            <div className={"card h-100 bg-transparent"}>
                                <div className={"card-body px-5 py-4 z-1 text-white"}>

                                    <ReactTypingEffect
                                        text={["So glad to see you again!", "You already know what to do.", "Provide your credentials."]}
                                        cursorRenderer={cursor => <span className={"line-title text-size-55"}>{cursor}</span>}
                                        displayTextRenderer={(text, i) => {
                                            return (
                                                <span className={"line-title text-size-55"}>{text}</span>
                                            );
                                        }}
                                        eraseDelay={2000}
                                        speed={100}
                                        eraseSpeed={100}
                                        typingDelay={300}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"col-12 col-md-6"}>
                            <div className={"card card-mb py-4 px-4 h-100"}>
                                <div className={"card-body"}>
                                    <h3 className={"mb-4"}><b>Login</b></h3>
                                    <p>Provide your account credentials to log in.</p>
                                    <LoginForm/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default SignIn;
