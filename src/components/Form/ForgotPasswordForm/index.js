import Navbar from "../../Navbar";
import React from 'react';
import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {red} from "@mui/material/colors";

export default class ForgotPasswordForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('USE RESET PASSWORD SERVICE DLA: ' + this.state.email);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <TextField className={"w-100 my-2"}
                               id="email"
                               label="Email"
                               variant="filled"
                               type="text"
                               name={"email"}
                               value={this.state.email}
                               onChange={this.handleInputChange}
                               required/>
                </FormGroup>

                <input className={"float-end button-red"} type="submit" value="Send validation link" />
            </form>
        );
    }
}

