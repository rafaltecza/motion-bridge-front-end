import {Grid} from "@material-ui/core";
import React, {useCallback, useEffect, useState} from "react";

import {useProductConfiguration} from "../../hooks/useProductConfiguration";
import Halo from "../../components/VantaAnimation/Halo";
import Card from "../../components/Card";
import Basket from "../../components/Basket";
import CheckoutItem from "../../components/Checkout/CheckoutItem";
import ButtonBlop from "../../components/Button/Blop";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import {useUserContext} from "../../providers/UserContextProvider";
import {useMutation, useQuery} from "@tanstack/react-query";
import {signIn} from "../../api/backend/auth";
import {connect, useSelector} from "react-redux";
import {appendProduct, deleteProduct} from "../../redux/Products/products.actions";
import {requestOrder} from "../../api/backend/order";
import useHandleApiError from "../../hooks/useHandleApiError";
import {CardContent, Link, TextField} from "@mui/material";
import {requestProducts} from "../../api/backend/products";
import {deleteSubscription, postOrder, postPaymentRequest, requestOrders} from "../../api/backend/user";

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [checkout, setCheckout] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const handleApiError = useHandleApiError();
    const {data} = useQuery([], requestOrders);

    useEffect(() => {
        if (data && data?.data && data?.data?.restOrders) {
            setCheckout(data.data?.restOrders[0]);
            setIsLoading(false);
        }
    }, [data]);


    const navigateProducts = () => {
        navigate('/products');
    }


    const handlePayment = useCallback(async () => {
        //fetch data to api using delete as deleteSubscription
        const fetchData = async () =>
            await postPaymentRequest({orderId: checkout.id}).then(response => response.data).then(data => {
                console.log(data);
                // navigate("https://checkout.stripe.com/pay/cs_test_a1HL1rgNncggmS5bZe7z6obu8OhsUAzgw1Hi2opVyW6OHBiE69XhQAuOn3#fidkdWxOYHwnPyd1blpxYHZxWjJHTjd8bEFSNHU8d0lybGFfMWpQXFJUdicpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVowbkQ0Mks9PXU1PEI9d0ZmSEgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqZm1gZm5qcHErdnF3bHVgK2ZqaConeCUl");
                window.location.href = "https://buy.stripe.com/test_9AQ6s774l1dKdLW289";
            })
        fetchData();
    }, [checkout]);

    return (
        <>
            <Halo className={"background-vanta"}/>
            <div className={"container"}  style={{
                minHeight: '90vh',
                fontFamily: "Poppins, sans-serif"
            }}>
                <div className={"mt-5 mb-4"}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <div className={"mb-3 bg-transparent"}>
                                <CardContent>
                                    <Grid container alignContent={"space-between"}>
                                        <Grid item xs={"auto"}>
                                            <h3 className={"mb-0 text-white"}>Checkout</h3>
                                        </Grid>
                                        <Grid className={"ms-auto"} item xs={"auto"}>
                                            <h4 className={"mb-0"}><Basket/></h4>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </div>

                            <Card>
                                <CardContent className="card-border">
                                    <Box>
                                        <TextField name={"coupon"}
                                                   id={"coupon"}
                                                   type={"text"}
                                                   label={"Coupon"}
                                                   variant={"outlined"}
                                                   className={"w-100 my-2 text-field style-secondary"}
                                                    disabled/>

                                    </Box>
                                    <hr className={"mt-2"}/>

                                    <Grid container>
                                        <Grid item xs={"auto"}>
                                            <h5 className={"text-danger"}>Discount:</h5>
                                        </Grid>
                                        <Grid className={"ms-auto"} item xs={"auto"}>
                                            <h5 className={"text-danger"}>{ isLoading ? "Loading..." : `0 USD`}</h5>
                                        </Grid>
                                    </Grid>

                                    <Grid container>
                                        <Grid item xs={"auto"}>
                                            <h5>Total:</h5>
                                        </Grid>
                                        <Grid className={"ms-auto"} item xs={"auto"}>
                                            <h5>{ isLoading ? "Loading..." : `${checkout?.currentPrice} USD`}</h5>
                                        </Grid>
                                    </Grid>

                                    <Box>
                                        <a className={"text-size-10 text-decoration-none text-white-50"}>Privacy Policy</a>
                                        <a className={"ms-2 text-size-10 text-decoration-none text-white-50"}>Terms of Service</a>
                                    </Box>

                                    <Box mt={1}>
                                        <p className={"text-size-10"}>Motion Bridge sp.z o.o. based in Warsaw, Plac Europejski 1, 00-844 Warsaw, is the administrator
                                        of your personal data for the purposes of sales and promotional activities. More information
                                            can be found in the Privacy Policy.</p>
                                    </Box>
                                    <hr className={"mt-2"}/>
                                    <Grid className={"mt-2"} container>
                                        <Grid item xs={"auto"}>
                                            <ButtonBlop onClick={navigateProducts} className={"blob-btn-border-red-md"}>More products</ButtonBlop>
                                        </Grid>
                                        <Grid className={"ms-auto"} item xs={"auto"}>
                                            <ButtonBlop onClick={() => handlePayment()} className={"blob-btn-border-gold-md"}>Proceed</ButtonBlop>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>

                        </Grid>

                        <Grid item xs={12} md={6}>
                            {isLoading ? "Loading..." : checkout?.subscriptions && checkout.subscriptions.map((subscription, index) => {
                                return (
                                    // <CheckoutItem key={index} product={product} handleRemove={onItemClick}/>
                                    <CheckoutItem orderId={checkout?.id} subscription={subscription}/>
                                )
                            })}

                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        addedProducts: state.addedProducts.addedProducts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeProduct: (product) => dispatch(deleteProduct(product.id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)