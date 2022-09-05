import {useParams} from "react-router";
import {useTestProductsData} from "../../hooks/useTestProductsData";
import {Grid} from "@material-ui/core";
import CardContent from "../../components/Card/Content";
import InventoryIcon from "@mui/icons-material/Inventory";
import React, {useCallback, useEffect, useState} from "react";
import Slider from "../../components/Slider";
import {SliderContent, SliderNavigation, SliderTitle} from "../../components/Slider/SliderElements";
import Box from "@mui/material/Box";
import ButtonBlop from "../../components/Button/Blop";
import Lottie from "react-lottie-player";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {appendProduct} from "../../redux/Products/products.actions";
import {useMutation, useQuery} from "@tanstack/react-query";
import {requestProducts} from "../../api/backend/products";
import Slide from "../../components/Slider/Slide";
import ProductProperties from "../../components/Product/Parameters";
import ProductParameters from "../../components/Product/Parameters";
import {postOrder, requestOrders} from "../../api/backend/user";
import useHandleApiError from "../../hooks/useHandleApiError";

const ProductPage = () => {
    const navigate = useNavigate();
    const postOrderRequest = useMutation(postOrder);

    const [product, setProduct] = useState([]);
    const [currentAnimation, setCurrentAnimation] = useState({});
    const [isAnimationLoaded, setAnimationLoaded] = useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isInBasket, setInBasket] = useState(false);
    const [isLoadingOrderCheck, setIsLoadingOrderCheck] = React.useState(true);

    //compile two queries from above to one
    // const { data: data } = useQuery([], () => Promise.all([requestProducts(), requestOrders()]));
    const handleApiError = useHandleApiError();

    useEffect(() => {
        const fetchData = async () => {
            const result = await requestProducts();
            if (result.data) {
                setProduct(result?.data.find(prod => prod.id === parseInt(productRoute)));
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await requestOrders();
            if (result?.data && result?.data) {

                //find in restOrder array within subscriptions array subscription that match productId with parseInt productRoute

                const toBasket = result?.data?.restOrders?.find(order => order.subscriptions?.find(subscription => subscription.productId === parseInt(productRoute)));
                console.log(toBasket);
                setInBasket(toBasket);

                //set is subscribed by finding isActive on true and productId match
                const subscribed = toBasket?.subscriptions?.find(subscription => subscription.productId === parseInt(productRoute) && subscription.isActive === true);

                setIsSubscribed(subscribed ? subscribed?.isActive : false);
                setIsLoadingOrderCheck(false);
            }
        };

        fetchData()
    }, []);

    // //handle subscription post request
    const handleOrder = useCallback(async () => {
        const response = await postOrderRequest.mutateAsync({productId: product.id},
            {
                onSuccess: (data) => {
                    navigate('/checkout');
                },
                onError: (error) => {
                    handleApiError(error);
                }
            });
    }, [product, postOrderRequest, navigate, handleApiError]);

    const {productRoute} = useParams();

    const getData = () => {
        fetch('../lottie/example.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setCurrentAnimation(myJson);
                setAnimationLoaded(true);
            });
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 56px, rgb(25 25 25) 56px, rgb(24 24 24) 112px)",
            backgroundColor: "rgb(29 29 29)"
        }}>
            <Box className={"container"} position={"absolute"} top={"8rem"} left={"3rem"} zIndex={10}>
                <div className={"mb-3 position-relative w-50 card bg-transparent"}>
                    <CardContent className={"z-1"} rightComponent={
                        <span className="shadow badge bg-animated-gradient-gy text-black">
                            {product?.price ? (
                                <h5 className={"mb-0 p-2"}>{product?.price} {product?.currency.toUpperCase()}</h5>
                            ) : (
                                <></>
                            )}
                        </span>
                    } back={true} icon={() => <InventoryIcon
                        className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>}>
                        <h3 className={"m-0 text-title"} style={{lineHeight: '40px'}}>{product?.title}</h3>
                    </CardContent>
                </div>
            </Box>

            {!isLoading && <Slider slides={product?.presentations} isSubscribed={isSubscribed} isAlreadyAdded={isInBasket} handleOrder={handleOrder} productId={product?.id}/>}

            <div className={"container"} style={{
                minHeight: '90vh',
                fontFamily: "Poppins, sans-serif"
            }}>
                <div className={"mt-5 mb-4"}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Grid className={"mt-3"} container spacing={3}>
                                { product?.parameters && product?.parameters.map((prop, index) => (
                                    <Grid key={index} item xs={12} md={6} lg={3}>
                                        <ProductProperties index={index} {...prop}/>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>

    );
}


const mapStateToProps = state => {
    return {
        addedProducts: state.addedProducts.addedProducts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (product) => dispatch(appendProduct(product)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)