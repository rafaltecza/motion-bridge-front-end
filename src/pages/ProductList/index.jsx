import React, {useEffect} from 'react'
import ProductList from "../../components/Product/List";
import {useQuery} from "@tanstack/react-query";
import {requestProducts} from "../../api/backend/products";
import {useProductConfiguration} from "../../hooks/useProductConfiguration";

const ProductsPage = () => {
    const {data} = useQuery([], requestProducts);
    const [products, setProducts] = React.useState(useProductConfiguration);
    const [isLoading, setIsLoading] = React.useState(true);

    // useEffect(() => {
    //     if (data && data?.data) {
    //         console.log(data.data);
    //         setProducts(data.data);
    //         setIsLoading(false);
    //     }
    // }, [data, isLoading, setIsLoading]);

    return (
        <div style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 56px, rgb(25 25 25) 56px, rgb(24 24 24) 112px)",
            backgroundColor: "rgb(29 29 29)",
            minHeight: '90vh',
        }}>
            <div className={"container"} style={{
                fontFamily: "Poppins, sans-serif"
            }}>
                <div>
                    <div className={"row my-4"}>
                        <div className={"col-12"}>
                            <div className={"card"}>
                                <div className={"card-body"}>
                                    <h4 className={"mb-0"}>Available Products</h4>
                                </div>
                            </div>
                        </div>
                    </div>


                    <ProductList products={products} isLoading={isLoading}/>


                    {/*<ProductDemo backgroundType={"color"}/>*/}
                    {/*<ProductDemo backgroundType={"cobweb"}/>*/}
                    {/*<ProductDemo backgroundType={"polygon"}/>*/}
                    {/*<ProductDemo backgroundType={"square"}/>*/}
                    {/*<ProductDemo backgroundType={"tadpole"}/>*/}
                    {/*<ProductDemo backgroundType={"fountain"}/>*/}

                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
