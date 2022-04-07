import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Button, TextareaAutosize, TextField} from "@mui/material";



export default function BasicCard() {
    return (
        <Card sx={{minWidth: '10vw', maxWidth:'100vw',background:'#e8e8e8' }}>
            <CardContent sx={{padding:'1%'}}>

                <div>
                    <Typography sx={{ fontWeight:'bold', fontSize: 17 }} color="text.secondary" gutterBottom>
                        Don't have account? Create your account, it takes less than minute
                    </Typography>
                </div>

                <div style={{minHeight:'40vh'}}>
                    <div style={{paddingTop:"1%", paddingRight:"1%", float:'left', width:'50%'}}>
                        <div  style={{paddingBottom:"1%"}} >
                            <TextField  sx={{background:'#ffffff'}} fullWidth size="small" id="outlined-basic" label="Name" variant="outlined" />
                        </div>
                        <div>
                            <TextField  sx={{background:'#ffffff'}} fullWidth size="small"  id="outlined-basic" label="Email" variant="outlined" />
                        </div>
                    </div>
                    <div style={{paddingTop:'1%',float:'left', width:'50%'}}>
                        <div>
                            <TextareaAutosize aria-label="minimum height" maxRows={10} minRows={10} placeholder="Message" style={{ width:'100%' }}/>
                            <Button sx={{float:'right', fontWeight:'bold'}} color="error" variant="contained">Send</Button>
                        </div>
                    </div>
                </div>



            </CardContent>
        </Card>

    );
}
