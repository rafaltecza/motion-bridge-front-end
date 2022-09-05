import Avatar from "../../components/User/Avatar";
import {Grid} from "@mui/material";
import Card from "../../components/Card";
import CardContent from "../../components/Card/Content";
import SettingsNav from "../../components/SettingsNav";
import InventoryIcon from "@mui/icons-material/Inventory";
import React, {useCallback, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {useMutation, useQuery} from "@tanstack/react-query";
import {deleteSubscription, putSubscriptionsStatus, requestSubscriptions} from "../../api/backend/user";
import useHandleApiError from "../../hooks/useHandleApiError";
import ButtonBlop from "../../components/Button/Blop";
import {useUserContext} from "../../providers/UserContextProvider";
import {useNavigate} from "react-router-dom";

const InventoryPage = () => {
    const navigate = useNavigate();
    const [subscriptions, setSubscriptions] = useState([]);
    const {user} = useUserContext();
    console.log(user);
    const AvatarElement = () => <Avatar /*alt="Cindy Baker"*/ /*src="logo192.png"*/ name={user.username}
                                                                                    classes={"large mx-auto mb-4"}/>
    const IconElement = () => <InventoryIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>
    const handleApiError = useHandleApiError();

    const {data} = useQuery([], requestSubscriptions);

    const handleChangeRenewStatus = useCallback(async (subscriptionId) => {
        //fetch data to api using delete as deleteSubscription
        const fetchData = async () =>
            await putSubscriptionsStatus(subscriptionId).then(data => {
                console.log(data);
            }).catch(error => {
                handleApiError(error);
            });
        fetchData();
    }, [putSubscriptionsStatus, handleApiError]);


    useEffect(() => {
        if (data && data?.data) {
            setSubscriptions(data.data);
        }
    }, [data]);

    const goToPanel = (productId) => {
        navigate(`/panel/${productId}`);
    }

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

                            {subscriptions?.length > 0 ?
                                (<Grid container spacing={3}>
                                    {subscriptions.map((subscription, index) => (
                                            <Grid className={""} item xs={12} md={12} key={index}>
                                                <Card className={"mb-3"}>
                                                    <CardContent>
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12} md={4}>
                                                                <h4>{subscription?.title}</h4>
                                                                <h5>{subscription?.type}</h5>
                                                            </Grid>
                                                            <Grid item xs={12} md={4}>
                                                                <b>Started: </b>
                                                                <p>{subscription?.startDate?.split('T')[0]} {subscription?.endDate?.split('T')[1]?.split('.')[0]}</p>
                                                                <b>{Boolean(subscription?.autoRenew) ? "Renew:" : "End:"} </b>
                                                                <p>{subscription?.endDate?.split('T')[0]} {subscription?.endDate?.split('T')[1]?.split('.')[0]}</p>
                                                            </Grid>
                                                            <Grid item xs={12} md={4}>
                                                                <b>Generates:</b>
                                                                <p>{subscription?.animationsCounter}/{subscription?.animationsLimit}</p>
                                                                <b>Status:</b>
                                                                <p>{Boolean(subscription?.autoRenew) ? "Auto-renew" : "Ending"}</p>
                                                            </Grid>
                                                            <Grid item xs={12} md={12}>
                                                                <Box className={""}>
                                                                    <ButtonBlop
                                                                        onClick={() => handleChangeRenewStatus(subscription?.id)}
                                                                        className={Boolean(subscription?.autoRenew) ? "blob-btn-border-red-md" : "blob-btn-border-gold-md"}>{Boolean(subscription?.autoRenew) ? "Resign" : "Continue"}</ButtonBlop>
                                                                    <Box className={"float-end"}>
                                                                        <ButtonBlop
                                                                            onClick={() => goToPanel(subscription.productId)}
                                                                            className={"blob-btn-border-gold-md"}>Panel</ButtonBlop>
                                                                    </Box>
                                                                </Box>

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