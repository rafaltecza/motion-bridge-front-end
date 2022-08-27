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
import {useMutation} from "@tanstack/react-query";
import {signIn} from "../../api/backend/auth";
import {connect, useSelector} from "react-redux";
import {appendProduct, deleteProduct} from "../../redux/Products/products.actions";
import {requestOrder} from "../../api/backend/order";
import useHandleApiError from "../../hooks/useHandleApiError";
import {CardContent, Link, TextField} from "@mui/material";

const CheckoutPage = ({addedProducts, removeProduct}) => {
    const navigate = useNavigate();
    const [productsConfiguration, setProductsConfiguration] = useState(useProductConfiguration);
    const [checkout, setCheckout] = useState({});
    console.log(addedProducts);
    const handleApiError = useHandleApiError();

    const order = useMutation(requestOrder);

    const navigateProducts = () => {
        navigate('/products');
    }

    const onItemClick = useCallback((product) => (event) => {
        removeProduct(product);
    }, [removeProduct]);

    const onCheckoutClick = useCallback(() => {
        const fetchData = async () =>
                await order
                    .mutateAsync({
                        productId: 12,
                    })
                    .then(data => {
                        console.log(data);
                    }).catch(error => {
                        handleApiError(error);
                    }
                );
            fetchData();
    }, [order, handleApiError]);

    //
    useEffect(() => {
        setCheckout({
            //count the number of currency in the basket and decide which one to use
            currency: 'USD',
            total: addedProducts.reduce((acc, curr)=>{
                return acc + curr?.price;
            }, 0)
        })
    },[])

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
                                            <h5 className={"text-danger"}>0 {checkout?.currency}</h5>
                                        </Grid>
                                    </Grid>

                                    <Grid container>
                                        <Grid item xs={"auto"}>
                                            <h5>Total:</h5>
                                        </Grid>
                                        <Grid className={"ms-auto"} item xs={"auto"}>
                                            <h5>{checkout?.total} {checkout?.currency}</h5>
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
                                            <ButtonBlop onClick={onCheckoutClick} className={"blob-btn-border-gold-md"}>Proceed</ButtonBlop>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>

                        </Grid>

                        <Grid item xs={12} md={6}>
                            {addedProducts && addedProducts.map((product, index) => {
                                return (
                                    <CheckoutItem key={index} product={product} handleRemove={onItemClick}/>
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