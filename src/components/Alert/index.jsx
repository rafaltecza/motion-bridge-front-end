import * as React from 'react';
import {Alert, Collapse, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useEffect} from "react";

export const AlertBox = (props) => {
    const [open, setOpen] = React.useState(true);
    const [message, setMessage] = React.useState(props.message);
    const [type, setType] = React.useState(props.type);


    return (
        <Collapse in={open}>
            <Alert
                severity={type}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit"/>
                    </IconButton>
                }
                sx={{mb: 2}}
            >
                {message}
            </Alert>
        </Collapse>
    )
}

export default function AlertArea() {
    const [alerts, setAlerts] = React.useState([]);

    const allowedState = [];
    
    // setAlerts(oldArray => [...oldArray, test]);
    useEffect(() => {
        // Should not ever set state during rendering, so do this in useEffect instead.
        setAlerts(allowedState);
    }, []);

    return (
        <div className={""}>
            {alerts.map((localState, index) => (
                <AlertBox type={localState.type} message={localState.message}/>
            ))}
        </div>
    )

}
