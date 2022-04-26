import Navbar from "../../Navbar";
import React from 'react';
import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {red} from "@mui/material/colors";

export default class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        useEffect(() => {
            // POST request using fetch inside useEffect React hook
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'React Hooks POST Request Example' })
            };
            fetch('https://reqres.in/api/posts', requestOptions)
                .then(response => response.json())
                .then(data => setPostId(data.id));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
        }, []);

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
        alert('USE REGISTER SERVICE DLA: ' + this.state.name + " : " + this.state.email + " : " + this.state.password + " : " + this.state.repeatPassword + " : ");

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: this.state.name })
        };
        fetch('https://127.0.0.1/api/register', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <TextField className={"w-100 my-2"}
                               id="name"
                               label="Name"
                               variant="filled"
                               type="text"
                               name={"name"}
                               value={this.state.name}
                               onChange={this.handleInputChange}
                               required/>

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

                    <TextField className={"w-100 my-2"}
                               id="repeat-password"
                               label="Repeat Password"
                               variant="filled"
                               type="password"
                               name={"repeatPassword"}
                               value={this.state.repeatPassword}
                               onChange={this.handleInputChange}
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
        );
    }
}
