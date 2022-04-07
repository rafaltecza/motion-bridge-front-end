import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {bull} from "./BasicCardElement";
import {TextField} from "@mui/material";



export default function BasicCard() {
    return (
        <Card sx={{margin:'auto', minWidth: 175, maxWidth:'100vh',background:'#e8e8e8' }}>
            <CardContent sx={{padding:'2vh'}}>

                <div>
                    <Typography variant="h5" component="div">
                        Contact
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Don't have account? Create your account, it takes less than minute
                    </Typography>
                </div>

                <div style={{float:'right'}}>
                    <TextField sx={{background:'#ffffff'}}  id="outlined-basic" label="Message" variant="outlined" />
                </div>
                <div>
                    <TextField  sx={{background:'#ffffff'}} size="small" id="outlined-basic" label="Name" variant="outlined" />
                </div>
                <div style={{float:'left'}}>
                    <TextField sx={{background:'#ffffff'}} size="small"  id="outlined-basic" label="Email" variant="outlined" />
                </div>


            </CardContent>
        </Card>

    );
}
