import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {red} from "@mui/material/colors";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const navigate = useNavigate();

    const [state, setState] = React.useState({
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
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
        alert('USE REGISTER SERVICE DLA: ' + state.name + " : " + state.email + " : " + state.password + " : " + state.repeatPassword + " : ");
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;'
            },
            body: JSON.stringify({
                name: state.name,
                email: state.email,
                password: state.password,
                acceptedTerms: true,
                acceptedNewsletter: true
            })
        };
        fetch('https://motionbridge-generator.herokuapp.com/api/user/register', requestOptions).then(r => navigate('/'));
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit} >
            <FormGroup>
                <TextField className={"w-100 my-2"}
                           id="name"
                           label="Name"
                           variant="filled"
                           type="text"
                           name={"name"}
                           value={state.name}
                           onChange={handleOnChange}
                           required/>

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

                <TextField className={"w-100 my-2"}
                           id="repeat-password"
                           label="Repeat Password"
                           variant="filled"
                           type="password"
                           name={"repeatPassword"}
                           value={state.repeatPassword}
                           onChange={handleOnChange}
                           required/>

                <FormControlLabel control={<Checkbox sx={{
                    color: red[800],
                    '&.Mui-checked': {
                        color: red[600],
                    },
                }} defaultChecked required />} label="Accept rules of use.*"/>
                <FormControlLabel control={<Checkbox color="default" defaultChecked />} label="Send me newsletter."/>
            </FormGroup>

            <input className={"float-end button-red"} type="submit" value="Sign up" />
        </form>
    )
}

export default RegisterForm;
