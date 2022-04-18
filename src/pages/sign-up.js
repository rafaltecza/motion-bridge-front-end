import React from 'react'
import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import RegisterForm from "../components/Form/RegisterForm";

const SignUp = () => {
    return (
        <div className={"container"} style={{
            minHeight: '90vh'
        }}>
            <div>
                <div className={"row my-4"}>
                    <div className={"col-12 col-md-6"}>
                        <div className={"card"}>
                            <div className={"card-body px-5 py-4"}>
                                <h1>Nice to meet you.</h1>
                                <label>W tym miejscu ma być tło jakieś animowane</label>
                            </div>
                        </div>
                    </div>
                    <div className={"col-12 col-md-6"}>
                        <div className={"card card-mb py-4 px-4 h-100"}>
                            <div className={"card-body"}>
                                <h3 className={"mb-4"}>Register</h3>
                                <p>Don't have an account? Create one, it take less than a minute.</p>
                                <RegisterForm/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
