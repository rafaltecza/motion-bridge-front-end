import {useParams} from "react-router";
import {useTestProductsData} from "../../hooks/useTestProductsData";
import {Card, Grid} from "@material-ui/core";
import CardContent from "../../components/Card/Content";
import InventoryIcon from "@mui/icons-material/Inventory";
import React, {useState} from "react";
import Slider from "../../components/Slider";
import ParticlesBg from "particles-bg";
import {SliderContent, SliderTitle} from "../../components/Slider/SliderElements";

const ProductPage = () => {
    const [products, setProducts] = useState(useTestProductsData);

    console.log(products);

    const props = {
        backgroundType: "circle",
        currency: "USD",
        price: 9.99,
    }

    const {productRoute} = useParams();
    const thisProduct = products.find(prod => prod.route === productRoute || prod.id === parseInt(productRoute));
    const rightBarComponent = <>
         <span className="shadow badge bg-animated-gradient-gy text-black me-2" >
                                                { props.price ? (
                                                    <h5 className={"mb-0 p-2"}>{props.price} {props.currency}</h5>
                                                ) : (
                                                    <></>
                                                )}
                                            </span>
        <button className={"blob-btn-border-gold-md"}>
            <span>Subscribe</span>
            <span className="blob-btn-border-gold-md__inner">
                                      <span className="blob-btn-border-gold-md__blobs">
                                        <span className="blob-btn-border-gold-md__blob"/>
                                        <span className="blob-btn-border-gold-md__blob"/>
                                        <span className="blob-btn-border-gold-md__blob"/>
                                        <span className="blob-btn-border-gold-md__blob"/>
                                      </span>
                                    </span>
        </button>
    </>

    return (
        <>
            <Slider slides={[
                {
                    content: <div className={"container py-5"}>
                        <div className={"row py-5"}>
                            <div className={"col-6 text-white"}>
                                <SliderTitle>Product 1</SliderTitle>
                                <SliderContent>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</SliderContent>
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
                                <SliderContent>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</SliderContent>
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
                                <SliderContent>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</SliderContent>
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
                            <Card className={"mb-3 position-relative bg-gradient-bm"}>
                                <div className={"opacity-50"}>
                                    <ParticlesBg type={props.backgroundType} bg={{
                                        position: "absolute",
                                        zIndex: -1,
                                        top: 0,
                                        left: 0,
                                        borderRadius: "6px"
                                    }}/>
                                </div>

                                <CardContent className={"z-1"} rightComponent={rightBarComponent} back={true}
                                             icon={() => <InventoryIcon className={"icon icon-large icon-rectangle bg-dark text-white p-1"}/>}>
                                    <h3 className={"m-0 text-title"} style={{lineHeight: '40px'}}>{thisProduct?.name}</h3>
                                </CardContent>
                            </Card>


                            <Grid className={"mt-3"} container spacing={3}>
                                <Grid item xs={3}>
                                    <Card>
                                        <CardContent>
                                            <p>{thisProduct?.description}</p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card>
                                        <CardContent>
                                            <p>{thisProduct?.description}</p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card>
                                        <CardContent>
                                            <p>{thisProduct?.description}</p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card>
                                        <CardContent>
                                            <p>{thisProduct?.description}</p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>

                            <Grid className={"mt-3"} container spacing={3}>
                                <Grid item xs={6}>
                                    <Card>
                                        <CardContent>
                                            <p>{thisProduct?.description}</p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card>
                                        <CardContent>
                                            <p>{thisProduct?.description}</p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </div>

            </div>
        </>

    );
}

export default ProductPage;