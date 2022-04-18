import Navbar from "../../Navbar";
import React from 'react';
import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {red} from "@mui/material/colors";

export default class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('USE REGISTER SERVICE' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <TextField className={"w-100 my-2"}
                               id="filled-basic"
                               label="Name"
                               variant="filled"
                               type="text"
                               value={this.state.value}
                               onChange={this.handleChange}/>

                    <TextField className={"w-100 my-2"}
                               id="filled-basic"
                               label="Email"
                               variant="filled"
                               type="text"
                               value={this.state.value}
                               onChange={this.handleChange}/>

                    <TextField className={"w-100 my-2"}
                               id="filled-basic"
                               label="Password"
                               variant="filled"
                               type="password"
                               value={this.state.value}
                               onChange={this.handleChange}/>

                    <TextField className={"w-100 my-2"}
                               id="filled-basic"
                               label="Repeat Password"
                               variant="filled"
                               type="password"
                               value={this.state.value}
                               onChange={this.handleChange}/>

                    <FormControlLabel control={<Checkbox sx={{
                        color: red[800],
                        '&.Mui-checked': {
                            color: red[600],
                        },
                    }} defaultChecked />} label="Accept rules of use.*"/>
                    <FormControlLabel control={<Checkbox color="default" defaultChecked />} label="Send me newsletter."/>
                </FormGroup>

                <input className={"float-end button-red"} type="submit" value="Sign up" />
            </form>
        );
    }
}
