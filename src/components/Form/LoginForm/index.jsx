import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {red} from "@mui/material/colors";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "@mui/icons-material";

function LoginForm() {
    const navigate = useNavigate();

    const [state, setState] = React.useState({
        email: '',
        password: '',
    })

    const handleOnChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    };

    const onSubmit = (e) => {
        alert('USE LOGIN SERVICE DLA: ' + state.email + " : " + state.password + " : ");
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;'
            },
            body: JSON.stringify({
                email: state.email,
                password: state.password,
            })
        };
        fetch('https://motionbridge-generator.herokuapp.com/login', requestOptions).then(r => navigate('/'));
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit} >
            <FormGroup>
                <TextField className={"w-100 my-2"}
                           id="email"
                           label="Email"
                           variant="filled"
                           type="text"
                           name={"email"}
                           value={state.email}
                           onChange={handleOnChange}
                           required/>

                <TextField className={"w-100 my-2"}
                           id="password"
                           label="Password"
                           variant="filled"
                           type="password"
                           name={"password"}
                           value={state.password}
                           onChange={handleOnChange}
                           required/>
                <div className={"d-flex align-items-center mb-3"}>
                    <FormControlLabel control={<Checkbox color="default" defaultChecked />}
                                      label="Remember me"
                                      className={"me-auto"}/>

                    <Link to="/forgot-password" className="text-red">Forgot password?</Link>
                </div>

            </FormGroup>

            <input className={"float-end button-red"} type="submit" value="Sign up" />
        </form>
    )
}

export default LoginForm;
