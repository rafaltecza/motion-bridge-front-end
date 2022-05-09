import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {red} from "@mui/material/colors";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const navigate = useNavigate();

    const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);


    const [state, setState] = React.useState({
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
        emailHelperText: '',
        passwordHelperText: '',

    })


    const handleOnChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        validation(e);

        setState({
            ...state,
            [e.target.name]: value,
            [e.target.name+"HelperText"]:validation(e)
        });
    };

    const validation = (e) => {
        let textValue;

        switch (e.target.name)
        {
            case "email":
                textValue = !validateValue(e.target.value,emailRegex) ? "Incorrect "+e.target.name : "";
                break;
            case "password":
                textValue = !validateValue(e.target.value,passwordRegex) ? "Incorrect "+e.target.name : "";
                break;
        }
        return textValue;
    }

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

    const validateValue = (valueToValidate,regex) => {
        if(valueToValidate.length == 0)
            return true;

        let result = regex.test(String(valueToValidate));
        return result;
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
                           required
                           error={!validateValue(state.email,emailRegex)}
                           helperText={state.emailHelperText}/>

                <TextField className={"w-100 my-2"}
                           id="password"
                           label="Password"
                           variant="filled"
                           type="password"
                           name={"password"}
                           value={state.password}
                           onChange={handleOnChange}
                           required
                           error={!validateValue(state.password,passwordRegex)}
                           helperText={state.passwordHelperText}/>

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
