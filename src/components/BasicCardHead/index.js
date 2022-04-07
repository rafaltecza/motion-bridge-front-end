import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Button, TextareaAutosize, TextField} from "@mui/material";



export default function BasicCardHead({title}) {
    return (
        <Card sx={{marginBottom:'1%', minWidth: '10vw', maxWidth:'100vw',background:'#e8e8e8' }}>
            <CardContent sx={{padding:'2vh'}}>
                <div>
                    <Typography sx={{fontWeight:'bold'}} variant="h5" component="div">
                        {title}
                    </Typography>
                </div>
            </CardContent>
        </Card>

    );
}
