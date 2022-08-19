import React from 'react'
import AdminNav from "../../components/AdminNav";
import Avatar from "../../components/User/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import {Alert, Grid} from "@mui/material";
import Card from "../../components/Card";
import CardContent from "../../components/Card/Content";
import SettingsNav from "../../components/SettingsNav";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Menu from "../../components/Menu";
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import GroupIcon from '@mui/icons-material/Group';
const AdminPage = () => {

    const userName = "User Tech"
    const IconElement = () => <AdminPanelSettingsIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>
    const AvatarElement = () => <Avatar /*alt="Cindy Baker"*/ /*src="logo192.png"*/ name={userName}/>

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
                                <h3>Admin</h3>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <Menu content={[
                                    {
                                        name: "ProductList Management",
                                        page: "/admin/products",
                                        icon: () => <AutoAwesomeMosaicIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                    },
                                    {
                                        name: "Users Management",
                                        page: "/admin/users",
                                        icon: () => <GroupIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                    },
                                ]}/>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card className={"mb-3"}>
                            <CardContent icon={AvatarElement}>
                                <h3 style={{lineHeight: '3rem'}}>{userName}</h3>
                            </CardContent>
                        </Card>
                        <Alert className={"mb-3"} severity={"info"}>Application: {process.env.REACT_APP_NAME}</Alert>
                        <Alert className={"mb-3"} severity={"info"}>Version: {process.env.REACT_APP_VERSION}</Alert>
                        <Alert className={"mb-3"} severity={"success"}>API Status: Active</Alert>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AdminPage;