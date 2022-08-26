import Avatar from "../../components/User/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import {Grid} from "@mui/material";
import Card from "../../components/Card";
import CardContent from "../../components/Card/Content";
import React from "react";
import Menu from "../../components/Menu";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import HelpIcon from '@mui/icons-material/Help';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import {useUserContext} from "../../providers/UserContextProvider";
const Settings = () => {

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
                            <CardContent icon={IconElement}>
                                <h3 className={"m-0 text-title"}>Settings</h3>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <Menu content={[
                                    {
                                        name: "Account Management",
                                        page: "/settings/account",
                                        icon: () => <AccountCircleIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                    },
                                    {
                                        name: "Subscription Management",
                                        page: "/settings/subscriptions",
                                        icon: () => <LoyaltyIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                    },
                                    {
                                        name: "Contact us",
                                        page: "/settings/contact",
                                        icon: () => <EmailIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                    },
                                    {
                                        name: "Help",
                                        page: "/settings/help",
                                        icon: () => <HelpIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                    },
                                    {
                                        name: "Logout",
                                        page: "../logout",
                                        icon: () => <MeetingRoomIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                        line: true
                                    },
                                ]}/>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <AvatarElement/>
                        <Card className={"mb-3"}>
                            <CardContent>
                                <h3 className={"text-center mb-0"}>{user?.username}</h3>
                            </CardContent>
                        </Card>
                        <Card className={"mb-3 bg-transparent border rounded-2"}>
                            <CardContent>
                                <h5 className={"text-white text-center mb-0"}>{user?.authorities[0]?.authority.toString().split('_')[1]}</h5>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Settings;