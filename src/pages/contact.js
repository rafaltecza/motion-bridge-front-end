import React from 'react'
import {Card} from "@mui/material";
import BasicCard, {BasicTitleCard} from "../components/BasicCard";
import BasicCardHead from "../components/BasicCardHead";



const Contact = () => {
    return (
        <div  style={{
            minHeight: '90vh',
            background: "black",
            padding:'2%'
            ,
        }}>
            <div>
                <BasicCardHead variant="outlined" title="Contact"></BasicCardHead>
                <BasicCard variant="outlined"></BasicCard>
            </div>
        </div>
    );
};

export default Contact;