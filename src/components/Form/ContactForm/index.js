import Navbar from "../../Navbar";
import React from 'react';
import {Button, Checkbox, FormControlLabel, FormGroup, TextareaAutosize, TextField} from "@mui/material";
import {red} from "@mui/material/colors";

export default class ContactForm extends React.Component {

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
        alert('Email send: ' + this.state.email);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup >
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div>
                                <TextField className={"w-100"}
                                           id="name"
                                           label="Name"
                                           variant="filled"
                                           type="text"
                                           name={"name"}
                                           value={this.state.name}
                                           onChange={this.handleInputChange}
                                           required/>
                            </div>
                            <div>
                                <TextField className={"w-100"}
                                           id="email"
                                           label="Email"
                                           variant="filled"
                                           type="text"
                                           name={"email"}
                                           value={this.state.email}
                                           onChange={this.handleInputChange}
                                           required/>
                            </div>
                        </div>
                        <div className={"col-6"}>
                            <div>
                                <TextareaAutosize className={"w-100 "}
                                                  id="message"
                                                  placeholder="Message"
                                                  label="Message"
                                                  type="text"
                                                  name={"message"}
                                                  value={this.state.message}
                                                  onChange={this.handleInputChange}
                                                  maxRows={10}
                                                  minRows={10}
                                                  required/>
                            </div>
                        </div>
                    </div>
                </FormGroup>
                <input className={"float-end button-red"} type="submit" value="Send" />
            </form>
        );
    }
}

