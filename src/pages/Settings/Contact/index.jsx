import React from 'react'
import InventoryIcon from "@mui/icons-material/Inventory";
import {Grid} from "@mui/material";
import Card from "../../../components/Card";
import CardContent from "../../../components/Card/Content";
import ContactForm from "../../../components/Form/ContactForm";
import EmailIcon from '@mui/icons-material/Email';
import {Image} from "@mui/icons-material";

const ContactPage = () => {
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
                                <h3 className={"m-0 text-title"}>Contact</h3>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <p>Dont have an account? Create your account, it takes less than minute.</p>
                                <ContactForm/>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <img className={"w-100"} src={"../images/pages/contact/contact.webp"} alt={"Contact"}/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ContactPage;