import React from 'react'
import InventoryIcon from "@mui/icons-material/Inventory";
import {Grid} from "@mui/material";
import Card from "../../../components/Card";
import CardContent from "../../../components/Card/Content";
import ContactForm from "../../../components/Form/ContactForm";
import EmailIcon from '@mui/icons-material/Email';
import {Image} from "@mui/icons-material";
import {NameForm} from "../Account/NameForm";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {PasswordForm} from "../Account/PasswordForm";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import {DeleteForm} from "../Account/DeleteForm";
import Menu from "../../../components/Menu";
import Box from "@mui/material/Box";

const HelpPage = () => {
    const IconElement = () => <EmailIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>

    const answerAccountRemoval = <Box mx={3} my={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
    </Box>

    const answerPasswordChange = <Box mx={3} my={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
    </Box>

    const answerPurchaseItem = <Box mx={3} my={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
    </Box>

    const answerPaymentOptions = <Box mx={3} my={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
    </Box>

    const answerRenderProduct = <Box mx={3} my={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
    </Box>

    const answerHowItWorks = <Box mx={3} my={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
    </Box>

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
                                <h3 className={"m-0 text-title"}>Help</h3>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <Menu content={[
                                    {
                                        name: "Can I remove my account?",
                                        collapseText: 'Edit',
                                        collapse: answerAccountRemoval,
                                        icon: () => <AccountCircleIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                    },
                                    {
                                        name: "How do I change my password?",
                                        collapseText: 'Edit',
                                        collapse: answerPasswordChange,
                                        icon: () => <LoyaltyIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                    },
                                    {
                                        name: "How can I purchase an item?",
                                        collapseText: 'Edit',
                                        collapse: answerPurchaseItem,
                                        icon: () => <AccountCircleIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                    },
                                    {
                                        name: "What are the payment options?",
                                        collapseText: 'Edit',
                                        collapse: answerPaymentOptions,
                                        icon: () => <AccountCircleIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                    },
                                    {
                                        name: "How to render choosen product?",
                                        collapseText: 'Edit',
                                        collapse: answerRenderProduct,
                                        icon: () => <AccountCircleIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                    },
                                    {
                                        name: "How it works?",
                                        collapseText: 'Edit',
                                        collapse: answerHowItWorks,
                                        icon: () => <AccountCircleIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>,
                                    }
                                ]}/>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <img className={"w-100"} src={"../images/pages/help.webp"} alt={"Contact"}/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default HelpPage;