import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import KeyIcon from '@mui/icons-material/Key';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {FormGroup, ListItem, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function AccountDataForm() {

    const [state, setState] = React.useState({
        name: '',
        password: '',
        repeatPassword: '',
        oldPassword: '',
        deleteAccountPassword: '',
        openAccount:"false",
        openPassword:"false",
        openDeleteAccount:"false",
    })

    const handleCollapse = (event) => {
        event.preventDefault();
        const value = event.target.value === 'false' ? 'true' : 'false';
        setState({...state, [event.target.name]: value});
    };

    const handleOnChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setState({...state, [event.target.name]: value});
    };


    const onSubmit = (e) => {
        alert('Data Edidted ');
        e.preventDefault();
    }

    return (
        <div>
            <List component="nav">
                <form onSubmit={onSubmit} >
                    <FormGroup>
                        <ListItem>
                            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary="Account Name" />
                            <Button  name={"openAccount"} variant="outlined" value={state.openAccount} onClick={handleCollapse}>Edit</Button>
                        </ListItem>
                    <Collapse in={state.openAccount === 'true'} timeout="auto" unmountOnExit>

                                <div sx={{ pl: 4 }}>
                                    <TextField className={"w-100 my-2"}
                                               id="name"
                                               label="New Name"
                                               variant="filled"
                                               type="name"
                                               name={"name"}
                                                  value={state.name}
                                               onChange={handleOnChange}
                                               required/>
                                </div>

                            <input className={"float-end button-red"} type="submit" value="Save Changes" />
                        </Collapse>
                    </FormGroup>
                </form>

                <form onSubmit={onSubmit} >
                    <FormGroup>
                        <ListItem>
                            <ListItemIcon><KeyIcon /></ListItemIcon>
                            <ListItemText primary="Password" />
                            <Button name={"openPassword"} variant="outlined"  value={state.openPassword} onClick={handleCollapse}>Edit</Button>
                        </ListItem>
                        <Collapse in={state.openPassword === 'true'} timeout="auto" unmountOnExit>
                            <FormGroup>
                                <div sx={{ pl: 4 }}>
                                    <TextField className={"w-100 my-2"}
                                               id="password"
                                               label="New Password"
                                               variant="filled"
                                               type="password"
                                               name={"password"}
                                               value={state.password}
                                               onChange={handleOnChange}
                                               required/>

                                    <TextField className={"w-100 my-2"}
                                               id="repeat-password"
                                               label="Repeat New Password"
                                               variant="filled"
                                               type="password"
                                               name={"repeatPassword"}
                                               value={state.repeatPassword}
                                               onChange={handleOnChange}
                                               required/>

                                    <TextField className={"w-100 my-2"}
                                               id="oldPassword"
                                               label="Confirm Old Password"
                                               variant="filled"
                                               type="password"
                                               name={"oldPassword"}
                                               value={state.oldPassword}
                                               onChange={handleOnChange}
                                               required/>
                                </div>
                            </FormGroup>
                            <input className={"float-end button-red"} type="submit" value="Save Changes" />
                        </Collapse>
                    </FormGroup>
                </form>

                <form onSubmit={onSubmit} >
                    <FormGroup>
                        <ListItem>
                            <ListItemIcon><DeleteForeverIcon/></ListItemIcon>
                            <ListItemText primary="Delete Account" />
                            <Button name={"openDeleteAccount"} variant="outlined" color="error" value={state.openDeleteAccount} onClick={handleCollapse}>Delete</Button>
                        </ListItem>
                        <Collapse in={state.openDeleteAccount === 'true'} timeout="auto" unmountOnExit>
                            <div sx={{ pl: 4 }}>
                                <TextField className={"w-100 my-2"}
                                           id="deleteAccountPassword"
                                           label="Confirm password"
                                           variant="filled"
                                           type="password"
                                           name={"deleteAccountPassword"}
                                           value={state.deleteAccountPassword}
                                           onChange={handleOnChange}
                                           required/>
                            </div>

                            <input className={"float-end button-red"} type="submit" value="Delete" />
                        </Collapse>
                    </FormGroup>
                </form>



            </List>
        </div>

    );
}

export default AccountDataForm;
