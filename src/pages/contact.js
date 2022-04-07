import React from 'react'
import {Card} from "@mui/material";
import BasicCard, {BasicTitleCard} from "../components/BasicCard";



const Contact = () => {
    return (
        <div  style={{
            minHeight: '90vh',
            background: "black",
            margin:0,
            padding:50
            ,
        }}>
            <div>
                <BasicCard variant="outlined">Contact</BasicCard>
            </div>
        </div>
    );
};

export default Contact;