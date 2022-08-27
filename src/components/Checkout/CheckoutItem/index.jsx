import Card from "../../Card";
import {CardContent, Grid} from "@mui/material";
import {CheckoutItemCardElement} from "./CheckoutItemElements";
import Button from "@mui/material/Button";
import {ImCross} from "react-icons/im";
import ParticlesBg from "particles-bg";

const CheckoutItem = ({product, handleRemove}) => {
    return (
        <CheckoutItemCardElement>
            <CardContent className={"position-relative"}>
                    <ParticlesBg type={"circle"} bg={{
                        position: "absolute",
                        zIndex: -10,
                        top: 0,
                        left: 0,
                        borderRadius: "6px"
                    }}/>
                <Grid container>
                    <Grid item xs={12} md={7}>
                        <h3 className={"m-0 text-title"}>{product?.name}</h3>
                    </Grid>
                    <Grid item xs={12} className={"ms-auto"} md={"auto"}>
                                <span className="shadow badge bg-animated-gradient-gy text-black" >
                                    {product?.price != null && product?.currency != null? (
                                        <h5 className={"mb-0 p-2"}>{product?.price} / {product?.currency}</h5>
                                    ) : (
                                        <></>
                                    )}
                                </span>
                                <button className={"ms-3 button-red h-100"} onClick={handleRemove(product)} variant={"contained"} color={"primary"}>
                                    <ImCross/>
                                </button>

                    </Grid>
                </Grid>
            </CardContent>
        </CheckoutItemCardElement>
    );
}

export default CheckoutItem;