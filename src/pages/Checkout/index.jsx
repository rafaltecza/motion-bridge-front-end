import {Grid} from "@material-ui/core";
import CardContent from "../../components/Card/Content";
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
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Card className={"mb-3"}>
                                <CardContent icon={<Basket/>}>
                                    <h3 className={"m-0 text-title"}>Checkout</h3>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="card-border">
                                    Summary: {checkout?.total} {checkout?.currency}
                                    <Box mt={3} float={"right"}>
                                        <ButtonBlop onClick={onCheckoutClick} className={"blob-btn-border-red-md"}>Go to payment</ButtonBlop>
                                    </Box>
                                    <Box mt={3} float={"right"}>
                                        <ButtonBlop onClick={navigateProducts} className={"blob-btn-border-red-md"}>More products</ButtonBlop>
                                    </Box>
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