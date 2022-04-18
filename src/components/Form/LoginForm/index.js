import Navbar from "../../Navbar";
import React from 'react';
import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {red} from "@mui/material/colors";

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        alert('USE LOGIN SERVICE DLA: ' + this.state.email + " : " + this.state.password);
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

                    <TextField className={"w-100 my-2"}
                               id="password"
                               label="Password"
                               variant="filled"
                               type="password"
                               name={"password"}
                               value={this.state.password}
                               onChange={this.handleInputChange}
                               required/>
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

