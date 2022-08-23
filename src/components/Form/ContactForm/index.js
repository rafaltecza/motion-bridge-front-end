import React from "react";
import {FormGroup, TextareaAutosize, TextField} from "@mui/material";
import {SnackbarProvider, useSnackbar} from "notistack";
import SnackbarHandler from './SnackbarHandler'
import {Grid} from "@material-ui/core";

export default class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            helperText:'',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    validateEmail(emailToValidate)
    {
        if(emailToValidate.length == 0)
            return true;

        const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        let result = regex.test(String(emailToValidate).toLowerCase());
        return result;
    }



    handleEmailChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if(!this.validateEmail(value))
        {
            this.state.helperText="Incorrect Email"
        }
        else
        {
            this.state.helperText=""
        }

        this.setState({
            [name]: value,
        });
    }

    validateForm(name,email,message)
    {
        let emailCorrect = this.validateEmail(email)
        let emailIsEmpty = email.length == 0;
        if(name!=null && emailCorrect && message!=null && !emailIsEmpty)
            return true;
        else
            return false;
    }

    handleSubmit(event) {
            //alert('Email send: ' + this.state.email);
            event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup >
                    <Grid container spacing={2} p={2}>
                        <Grid item xs={12}>
                            <TextField variant={"outlined"}
                                       className={"w-100 text-field style-primary"}
                                       id="name"
                                       label="Name"
                                       type="text"
                                       name={"name"}
                                       value={this.state.name}
                                       onChange={this.handleInputChange}
                                       required/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="email"
                                       label="Email"
                                       variant={"outlined"}
                                       className={"w-100 text-field style-primary"}
                                       type="text"
                                       name={"email"}
                                       value={this.state.email}
                                       onChange={this.handleEmailChange}
                                       required
                                       error={!this.validateEmail(this.state.email)}
                                       helperText={this.state.helperText}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="message"
                                placeholder="Message"
                                label="Message"
                                type="text"
                                variant={"outlined"}
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                className={"w-100 text-field style-primary"}
                                multiline
                                rows={3}
                                maxRows={'infinity'}
                                required
                            />
                        </Grid>
                    </Grid>
                </FormGroup>
                <SnackbarProvider maxSnack={3}>
                    <SnackbarHandler
                        error={this.validateForm(this.state.name,this.state.email,this.state.message)}>
                    </SnackbarHandler>
                </SnackbarProvider>
            </form>

        );
    }
}

