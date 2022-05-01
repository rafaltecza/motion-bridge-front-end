import React from 'react'
import RegisterForm from "../components/Form/RegisterForm";
import LoginForm from "../components/Form/LoginForm";
import Halo from "../components/VantaAnimation/Halo";


const SignIn = () => {
    return (
        <div className={"container"} style={{
            minHeight: '90vh',
            fontFamily: "Poppins, sans-serif"
        }}>
            <div>
                <div className={"row my-4"}>
                    <div className={"col-12 col-md-6"}>
                        <div className={"card h-100"}>
                            <div className={"card-body px-5 py-4"}>
                                <h1>Welcome Back.</h1>
                                <Halo className={"h-50"}></Halo>
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
    );
};

export default SignIn;
