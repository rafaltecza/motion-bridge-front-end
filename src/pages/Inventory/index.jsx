import Avatar from "../../components/User/Avatar";
import {Grid} from "@mui/material";
import Card from "../../components/Card";
import CardContent from "../../components/Card/Content";
import SettingsNav from "../../components/SettingsNav";
import InventoryIcon from "@mui/icons-material/Inventory";
import React from "react";

const InventoryPage = () => {
    const [products, setProducts] = React.useState([]);

    const userName = "User Tech"
    const AvatarElement = () => <Avatar /*alt="Cindy Baker"*/ /*src="logo192.png"*/ name={products.length} classes={"large mx-auto mb-4"}/>
    const IconElement = () => <InventoryIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>

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
                                <h3>Inventory</h3>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                { products.length > 0 ? products.map(product => (
                                    <div key={product.id}>
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                    </div>
                                )) : "No items available :(" }
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <AvatarElement/>
                        <Card>
                            <CardContent>
                                <h3 className={"text-center mb-0"}>{products.length} items in inventory.</h3>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default InventoryPage;