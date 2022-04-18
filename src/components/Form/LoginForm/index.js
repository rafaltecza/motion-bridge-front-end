import Navbar from "../../Navbar";
import React from 'react';
import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {red} from "@mui/material/colors";

export default class LoginForm extends React.Component {

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
        alert('USE LOGIN SERVICE' + this.state.value);
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
                               value={this.state.value}
                               onChange={this.handleChange}/>

                    <TextField className={"w-100 my-2"}
                               id="password"
                               label="Password"
                               variant="filled"
                               type="password"
                               value={this.state.value}
                               onChange={this.handleChange}/>
                               <div className={"d-flex align-items-center mb-3"}>
                                   <FormControlLabel control={<Checkbox color="default" defaultChecked />}
                                                     label="Remember me"
                                                     className={"me-auto"}/>
                                   <a href="#" className="text-red">Forgot password?</a>
                               </div>

                </FormGroup>

                <input className={"float-end button-red"} type="submit" value="Sign in" />
            </form>
        );
    }
}

