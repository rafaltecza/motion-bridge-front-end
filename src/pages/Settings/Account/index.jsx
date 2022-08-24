import SettingsIcon from "@mui/icons-material/Settings";
import {Grid} from "@mui/material";
import React from "react";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import HelpIcon from '@mui/icons-material/Help';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AccountDataForm from "../../../components/Form/AccountData";
import CardContent from "../../../components/Card/Content";
import Card from "../../../components/Card";
import Avatar from "../../../components/User/Avatar";
import Menu from "../../../components/Menu";
import {DeleteForm} from "./DeleteForm";
import {PasswordForm} from "./PasswordForm";
import {NameForm} from "./NameForm";
import Box from "@mui/material/Box";
import {useUserContext} from "../../../providers/UserContextProvider";

const AccountPage = () => {

    const {user} = useUserContext();
    const AvatarElement = () => <Avatar /*alt="Cindy Baker"*/ /*src="logo192.png"*/ name={user?.username} classes={"large mx-auto mb-4"}/>
    const IconElement = () => <SettingsIcon className={"icon icon-large icon-rectangle bg-dark text-white"}/>

    return (
        <div className={"container"}  style={{
            minHeight: '90vh',
            fontFamily: "Poppins, sans-serif"
        }}>
            <div className={"mt-5 mb-4"}>
                <Grid container spacing={12}>
                    <Grid item xs={8}>
                        <Card className={"mb-3"}>
                            <CardContent back={true} icon={IconElement}>
                                <h3 className={"m-0 text-title"} style={{lineHeight: '40px'}}>Account</h3>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <Menu content={[
                                    {
                                        name: "Account Name",
                                        collapseText: 'Edit',
                                        collapse: <NameForm/>,
                                        icon: () => <AccountCircleIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                    },
                                    {
                                        name: "Password",
                                        collapseText: 'Edit',
                                        collapse: <PasswordForm/>,
                                        icon: () => <LoyaltyIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                    },
                                    {
                                        name: "Delete Account",
                                        collapseText: 'Edit',
                                        collapse: <DeleteForm/>,
                                        icon: () => <AccountCircleIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                        line: true
                                    }
                                ]}/>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <AvatarElement/>
                        <Card className={"mb-3"}>
                            <CardContent>
                                <Grid container>
                                    <Grid className={"me-auto"} item>
                                        <a><b>Name: </b></a>
                                    </Grid>
                                    <Grid item>
                                        <span>{user?.username}</span>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid className={"me-auto"} item>
                                        <a><b>Email: </b></a>
                                    </Grid>
                                    <Grid item>
                                        <span>{user?.sub}</span>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid className={"me-auto"} item>
                                        <a><b>Role: </b></a>
                                    </Grid>
                                    <Grid item>
                                        <span>{user?.authorities[0]?.authority.toString().split('_')[1]}</span>
                                    </Grid>
                                </Grid>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AccountPage;