import React, {useEffect, useState} from 'react'
import {Grid} from "@mui/material";
import Card from "../../../components/Card";
import CardContent from "../../../components/Card/Content";
import EmailIcon from '@mui/icons-material/Email';
import Button from "@mui/material/Button";
import {useQuery} from "@tanstack/react-query";
import {requestSubscriptions} from "../../../api/backend/user";

const SubscriptionPage = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const {data} = useQuery([], requestSubscriptions);

    useEffect(() => {
        if (data && data?.data) {
            console.log(data.data);
            setSubscriptions(data.data);
            console.table(data.data);
        }
    }, [data]);

    const IconElement = () => <EmailIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>

    return (
        <div className={"bg-md-primary"}>

        <div className={"container"}  style={{
            minHeight: '90vh',
            fontFamily: "Poppins, sans-serif"
        }}>
            <div className={"mt-5 mb-4"}>
                <Grid container spacing={12}>
                    <Grid item xs={8}>
                        <Card className={"mb-3"}>
                            <CardContent back={true} icon={IconElement}>
                                <h3 className={"m-0 text-title"}>Subscription Management</h3>
                            </CardContent>
                        </Card>

                        { subscriptions.map((subscription, index) => (
                            <Card key={index} className={"mb-3"}>
                                <CardContent>
                                    <h3>{ subscription?.name }</h3>
                                    <p>{ subscription?.description }</p>
                                    <h5 className={"text-white-50 text-decoration-none"}>{ subscription?.endDate }</h5>
                                    <h5 className={"text-white-50 text-decoration-none"}>{ subscription?.price }</h5>
                                    <h5 className={"text-white-50 text-decoration-none"}>{ subscription?.timePeriod }</h5>
                                    <h5 className={"text-white-50 text-decoration-none"}>{ subscription?.animationsLimit }</h5>
                                    <Button className={"float-end mb-3"} variant={"contained"} color={"primary"}>Anuluj</Button>
                                </CardContent>
                            </Card>
                        ))}


                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <img className={"w-100"} src={"../images/pages/subscriptions/subscriptions.webp"} alt={"Contact"}/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
        </div>
    );
};

export default SubscriptionPage;