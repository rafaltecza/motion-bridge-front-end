import { useSnackbar } from 'notistack';
import Button from "@mui/material/Button";
import React from "react";

const SnackbarHandler = (props) => {
    const isError = props.error;
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleSnackbar= () => () => {

        let variant;
        let message;

        if(isError == true)
        {
            variant = 'success'
            message = 'Thank you for your message'
        }
        else
        {
            variant = 'error'
            message = 'Incorrect completed form'
        }


        enqueueSnackbar(message, { variant });
    };


    return (
        <input onClick={handleSnackbar()} className={"float-end button-red"} type="submit" value="Send" />
    );
}

export default SnackbarHandler