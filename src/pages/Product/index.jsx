import {useParams} from "react-router";
import {useTestProductsData} from "../../hooks/useTestProductsData";
import {Card, Grid} from "@material-ui/core";
import CardContent from "../../components/Card/Content";
import InventoryIcon from "@mui/icons-material/Inventory";
import React, {useCallback, useEffect, useState} from "react";
import Slider from "../../components/Slider";
import {SliderContent, SliderNavigation, SliderTitle} from "../../components/Slider/SliderElements";
import Box from "@mui/material/Box";
import ButtonBlop from "../../components/Button/Blop";
import Lottie from "react-lottie-player";
import {useNavigate} from "react-router-dom";
import {connect, useDispatch, useSelector} from "react-redux";
import {appendAlert} from "../../redux/Alert/alert.actions";
import {appendProduct} from "../../redux/Products/products.actions";

const ProductPage = ({addedProducts, addProduct}) => {
    // const todos = useSelector(state => state.products)
    const navigate = useNavigate();
    const [products, setProducts] = useState(useTestProductsData);

    const [currentAnimation, setCurrentAnimation] = useState({});
    const [isAnimationLoaded, setAnimationLoaded] = useState(false);
    const isAlreadyAdded = useCallback((product) => {
        return addedProducts.some(p => p.id === product.id);
    }, [addedProducts]);

    const navigateCheckout = () => {
        !isAlreadyAdded(thisProduct) && addProduct(thisProduct);
        navigate('/checkout')
    }
    console.log(addedProducts);

    const ProductProps = {
        backgroundType: "circle",
        currency: "USD",
        price: 9.99,
    }

    const {productRoute} = useParams();
    const thisProduct = products.find(prod => prod.route === productRoute || prod.id === parseInt(productRoute));

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
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                setCurrentAnimation(myJson);
                setAnimationLoaded(true);
                console.log(myJson);
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
                            {ProductProps.price ? (
                                <h5 className={"mb-0 p-2"}>{ProductProps.price} {ProductProps.currency}</h5>
                            ) : (
                                <></>
                            )}
                        </span>
                    } back={true} icon={() => <InventoryIcon
                        className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>}>
                        <h3 className={"m-0 text-title"} style={{lineHeight: '40px'}}>{thisProduct?.name}</h3>
                    </CardContent>
                </div>
            </Box>
            <Slider slides={[
                {
                    content: <div className={"container py-5"}>
                        <div className={"row py-5"}>
                            <div className={"col-6 text-white"}>
                                <SliderTitle>Test Tile</SliderTitle>
                                <SliderContent>This product exists only becuase of presenation porpuse. It will be not contained in the final stage. It can be used to show possibilites provided by our service.</SliderContent>
                                <SliderNavigation>
                                    <ButtonBlop onClick={navigateCheckout}
                                                className={"blob-btn-border-gold-md"}>{isAlreadyAdded(thisProduct) ? "Checkout" : "Subscribe"}</ButtonBlop>
                                </SliderNavigation>
                            </div>
                            <div className={"col-6 text-white"}>
                                {isAnimationLoaded ? <Lottie
                                    loop
                                    animationData={currentAnimation}
                                    play
                                    className={'mx-auto'}
                                    style={{width: 450, height: 450}}
                                /> : <div>Loading...</div>}
                            </div>
                        </div>
                    </div>,
                    classes: "slide-color-1"
                },
                {
                    content: <div className={"container py-5"}>
                        <div className={"row py-5"}>
                            <div className={"col-6 text-white"}>
                                <SliderTitle>Product 2</SliderTitle>
                                <SliderContent>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                    lorem ipsum lorem ipsum lorem ipsum</SliderContent>
                            </div>
                        </div>
                    </div>,
                    classes: "slide-color-2"
                },
                {
                    content: <div className={"container py-5"}>
                        <div className={"row py-5"}>
                            <div className={"col-6 text-white"}>
                                <SliderTitle>Product 3</SliderTitle>
                                <SliderContent>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                    lorem ipsum lorem ipsum lorem ipsum</SliderContent>
                            </div>
                        </div>
                    </div>,
                    classes: "slide-color-3"
                }
            ]}/>
            <div className={"container"} style={{
                minHeight: '90vh',
                fontFamily: "Poppins, sans-serif"
            }}>
                <div className={"mt-5 mb-4"}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Grid className={"mt-3"} container spacing={3}>
                                <Grid item xs={3}>
                                    <div className="wrapper">
                                        <div className="clash-card barbarian">
                                            <div className="clash-card__image clash-card__image--barbarian">
                                                <img
                                                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png"
                                                    alt="barbarian"/>
                                            </div>
                                            <div className="clash-card__level clash-card__level--barbarian">Level 4
                                            </div>
                                            <div className="clash-card__unit-name">The Barbarian</div>
                                            <div className="clash-card__unit-description">
                                                The Barbarian is a kilt-clad Scottish warrior with an angry,
                                                battle-ready expression, hungry for destruction. He has Killer yellow
                                                horseshoe mustache.
                                            </div>

                                            <div
                                                className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                                                <div className="one-third">
                                                    <div className="stat">20<sup>S</sup></div>
                                                    <div className="stat-value">Training</div>
                                                </div>

                                                <div className="one-third">
                                                    <div className="stat">16</div>
                                                    <div className="stat-value">Speed</div>
                                                </div>

                                                <div className="one-third no-border">
                                                    <div className="stat">150</div>
                                                    <div className="stat-value">Cost</div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div className="wrapper">
                                        <div className="clash-card archer">
                                            <div className="clash-card__image clash-card__image--archer">
                                                <img
                                                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer.png"
                                                    alt="archer"/>
                                            </div>
                                            <div className="clash-card__level clash-card__level--archer">Level 5</div>
                                            <div className="clash-card__unit-name">The Archer</div>
                                            <div className="clash-card__unit-description">
                                                The Archer is a female warrior with sharp eyes. She wears a short, light
                                                green dress, a hooded cape, a leather belt and an attached small pouch.
                                            </div>

                                            <div
                                                className="clash-card__unit-stats clash-card__unit-stats--archer clearfix">
                                                <div className="one-third">
                                                    <div className="stat">25<sup>S</sup></div>
                                                    <div className="stat-value">Training</div>
                                                </div>

                                                <div className="one-third">
                                                    <div className="stat">24</div>
                                                    <div className="stat-value">Speed</div>
                                                </div>

                                                <div className="one-third no-border">
                                                    <div className="stat">300</div>
                                                    <div className="stat-value">Cost</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div className="wrapper">
                                        <div className="clash-card giant">
                                            <div className="clash-card__image clash-card__image--giant">
                                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png"
                                                     alt="giant"/>
                                            </div>
                                            <div className="clash-card__level clash-card__level--giant">Level 5</div>
                                            <div className="clash-card__unit-name">The Giant</div>
                                            <div className="clash-card__unit-description">
                                                Slow, steady and powerful, Giants are massive warriors that soak up huge
                                                amounts of damage. Show them a turret or cannon and you'll see their!
                                            </div>

                                            <div
                                                className="clash-card__unit-stats clash-card__unit-stats--giant clearfix">
                                                <div className="one-third">
                                                    <div className="stat">2<sup>M</sup></div>
                                                    <div className="stat-value">Training</div>
                                                </div>

                                                <div className="one-third">
                                                    <div className="stat">12</div>
                                                    <div className="stat-value">Speed</div>
                                                </div>

                                                <div className="one-third no-border">
                                                    <div className="stat">2250</div>
                                                    <div className="stat-value">Cost</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div className="wrapper">
                                        <div className="clash-card goblin">
                                            <div className="clash-card__image clash-card__image--goblin">
                                                <img
                                                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin.png"
                                                    alt="goblin"/>
                                            </div>
                                            <div className="clash-card__level clash-card__level--goblin">Level 5</div>
                                            <div className="clash-card__unit-name">The Goblin</div>
                                            <div className="clash-card__unit-description">
                                                These pesky little creatures only have eyes for one thing: LOOT! They
                                                are faster than a Spring Trap, and their hunger for resources is
                                                limitless.
                                            </div>

                                            <div
                                                className="clash-card__unit-stats clash-card__unit-stats--goblin clearfix">
                                                <div className="one-third">
                                                    <div className="stat">30<sup>S</sup></div>
                                                    <div className="stat-value">Training</div>
                                                </div>

                                                <div className="one-third">
                                                    <div className="stat">32</div>
                                                    <div className="stat-value">Speed</div>
                                                </div>

                                                <div className="one-third no-border">
                                                    <div className="stat">100</div>
                                                    <div className="stat-value">Cost</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
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