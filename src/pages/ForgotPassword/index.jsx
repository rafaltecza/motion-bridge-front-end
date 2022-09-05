import React from 'react'
import ForgotPasswordForm from "../../components/Form/ForgotPasswordForm";

const ForgotPasswordPage = () => {
    return (
        <div className={"container"} style={{
            minHeight: '90vh',
            fontFamily: "Poppins, sans-serif"
        }}>
            <div>
                <div className={"row my-4"}>
                    <div className={"col-12 col-md-6"}>
                        <div className={"card"}>
                            <div className={"card-body px-5 py-4"}>
                                <h1>Let's try to resolve it.</h1>
                                <label>W tym miejscu ma być tło jakieś animowane</label>
                            </div>
                        </div>
                    </div>
                    <div className={"col-12 col-md-6"}>
                        <div className={"card card-mb py-4 px-4 h-100"}>
                            <div className={"card-body"}>
                                <h3 className={"mb-4"}><b>Account recovery</b></h3>
                                <p>Provide your account email to continue.</p>
                                <ForgotPasswordForm/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
