import React from 'react'
import ProductDemo from "../../components/Product/Demo";
import ProductList from "../../components/Product/List";

const ProductsPage = () => {
    return (
        <div className={"container"} style={{
            minHeight: '90vh',
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


                <ProductList/>






                {/*<ProductDemo backgroundType={"color"}/>*/}
                {/*<ProductDemo backgroundType={"cobweb"}/>*/}
                {/*<ProductDemo backgroundType={"polygon"}/>*/}
                {/*<ProductDemo backgroundType={"square"}/>*/}
                {/*<ProductDemo backgroundType={"tadpole"}/>*/}
                {/*<ProductDemo backgroundType={"fountain"}/>*/}

            </div>
        </div>

    );
};

export default ProductsPage;
