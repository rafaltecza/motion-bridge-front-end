import React, {useState} from 'react'
import InventoryIcon from "@mui/icons-material/Inventory";
import {Grid} from "@mui/material";
import Card from "../../../components/Card";
import CardContent from "../../../components/Card/Content";
import ContactForm from "../../../components/Form/ContactForm";
import EmailIcon from '@mui/icons-material/Email';
import {Image} from "@mui/icons-material";
import Button from "@mui/material/Button";

const SubscriptionPage = () => {
    const [subscriptions, setSubscriptions] = useState([{
        name: 'Profile Instagram',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    }]);

    const IconElement = () => <EmailIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>

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
                                <h3 className={"m-0 text-title"}>Subscription Management</h3>
                            </CardContent>
                        </Card>

                        { subscriptions.map(item =>
                            <Card>
                                <CardContent>
                                    <h3>{ item?.name }</h3>
                                    <p>{ item?.description }</p>
                                    <a className={"text-dark text-decoration-none"}>Renew: 17-08-2022</a>
                                    <Button className={"float-end mb-3"} variant={"contained"} color={"primary"}>Anuluj</Button>
                                </CardContent>
                            </Card>
                        )};


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
    );
};

export default SubscriptionPage;