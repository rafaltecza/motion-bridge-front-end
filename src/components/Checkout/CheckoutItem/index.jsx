import Card from "../../Card";
import {CardContent, Grid} from "@mui/material";
import {CheckoutItemCardElement} from "./CheckoutItemElements";
import Button from "@mui/material/Button";

const CheckoutItem = ({product, handleRemove}) => {
    return (
        <CheckoutItemCardElement>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <h3 className={"m-0 text-title"}>{product?.name}</h3>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <h3 className={"m-0 text-title"}>{product?.price} {product?.currency}</h3>
                        <Button onClick={handleRemove(product)} variant={"contained"} color={"primary"}>
                            Remove
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </CheckoutItemCardElement>
    );
}

export default CheckoutItem;