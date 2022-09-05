import {CardContent, Grid} from "@mui/material";
import {CheckoutItemCardElement} from "./CheckoutItemElements";
import {ImCross} from "react-icons/im";
import ParticlesBg from "particles-bg";
import {deleteSubscription} from "../../../api/backend/user";
import {useMutation} from "@tanstack/react-query";
import {useCallback} from "react";
import useHandleApiError from "../../../hooks/useHandleApiError";

const CheckoutItem = ({subscription, orderId}) => {
    const handleApiError = useHandleApiError();
    // //handle subscription post request

    const handleDelete = useCallback(async () => {
        //fetch data to api using delete as deleteSubscription
        const fetchData = async () =>
            await deleteSubscription(orderId, subscription.id).then(data => {
                console.log(data);
            }).catch(error => {
                handleApiError(error);
            });
        fetchData();
    }, [deleteSubscription, handleApiError, orderId, subscription.id]);

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
                        <h4 className={"m-0 text-title"}>{subscription?.title}</h4>
                        <h5 className={"m-0 text-title"}>{subscription?.type}</h5>
                        {/*<h5 className={"m-0 text-title"}>{subscription?.endDate.split('T')[0]} {subscription?.endDate.split('T')[1].split('.')[0]}</h5>*/}
                    </Grid>
                    <Grid item xs={12} className={"ms-auto"} md={"auto"}>
                                <span className="shadow badge bg-animated-gradient-gy text-black" >
                                    {subscription?.currentPrice != null ? (
                                        <h5 className={"mb-0 p-2"}>{subscription?.currentPrice} / USD</h5>
                                    ) : (
                                        <></>
                                    )}
                                </span>
                                {/*<button className={"ms-3 button-red h-100"} onClick={handleRemove(product)} variant={"contained"} color={"primary"}>*/}
                                <button className={"ms-3 button-red align-self-center"} onClick={() => handleDelete()} color={"primary"}>
                                    <ImCross/>
                                </button>

                    </Grid>
                </Grid>
            </CardContent>
        </CheckoutItemCardElement>
    );
}

export default CheckoutItem;