import Avatar from "../../components/User/Avatar";
import {Grid} from "@mui/material";
import Card from "../../components/Card";
import CardContent from "../../components/Card/Content";
import SettingsNav from "../../components/SettingsNav";
import InventoryIcon from "@mui/icons-material/Inventory";
import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {useMutation, useQuery} from "@tanstack/react-query";
import {requestSubscriptions} from "../../api/backend/user";
import useHandleApiError from "../../hooks/useHandleApiError";

const InventoryPage = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const AvatarElement = () => <Avatar /*alt="Cindy Baker"*/ /*src="logo192.png"*/ name={"User Tech"}
                                                                                    classes={"large mx-auto mb-4"}/>
    const IconElement = () => <InventoryIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>
    const handleApiError = useHandleApiError();

    const {data} = useQuery([], requestSubscriptions);

    useEffect(() => {
        if (data && data?.data) {
            setSubscriptions(data.data);
        }
    }, [data]);



    return (
        <div className={"bg-md-primary"}>
            <div className={"container"} style={{
                minHeight: '90vh',
                fontFamily: "Poppins, sans-serif"
            }}>
                <div className={"mt-5 mb-4"}>
                    <Grid container spacing={12}>
                        <Grid item xs={8}>
                            <Card className={"mb-3"}>
                                <CardContent icon={IconElement}>
                                    <h3>Inventory</h3>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent>
                                    {subscriptions?.length > 0 ?
                                        (<Grid container spacing={3}>
                                            { subscriptions.map((subscription, index) => (
                                                <Grid item xs={12} md={6} key={index}>
                                                    <Card className={"mb-3"}>
                                                        <CardContent>
                                                            <Grid container spacing={3}>
                                                                <Grid item xs={12} md={6}>
                                                                    <h3>{subscription?.isActive}</h3>
                                                                </Grid>
                                                                <Grid item xs={12} md={6}>
                                                                    <h3>{subscription?.type}</h3>
                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                                )
                                            )}
                                        </Grid>) : <Box width={"100%"} minHeight={"50vh"} className={"text-center"}>
                                            <h3>No items</h3>
                                            <h3>available</h3>
                                        </Box>
                                    }
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={4}>
                            <AvatarElement/>
                            <Card>
                                <CardContent>
                                    <h3 className={"text-center mb-0"}>{subscriptions?.length} items</h3>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default InventoryPage;