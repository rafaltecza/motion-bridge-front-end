import React from 'react'
import ProductDemo from "../components/Product/Demo";

const Products = () => {
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

                <ProductDemo name={"Profile Presenter"}
                             label={"Instagram"}
                             price={"9.99$/mo"}
                             content={"Some quick example text to build on the card title and make up the bulk of " +
                             "the card's content. Some quick example text to build on the card title and make up " +
                             "the bulk of the card's content. Some quick example text to build on the card title " +
                             "and make up the bulk of the card's content."}
                             backgroundType={"circle"}/>

                <div className={"row"}>
                    <div className={"col-lg-6 col-12"}>
                        <ProductDemo name={"Profile Presenter"}
                                     label={"Facebook"}
                                     price={"4.99$/mo"}
                                     content={"Some quick example text to build on the card title and make up the bulk of " +
                                     "the card's content. Some quick example text to build on the card title and make up " +
                                     "the bulk of the card's content. Some quick example text to build on the card title " +
                                     "and make up the bulk of the card's content."}
                                     backgroundType={"circle"}/>

                    </div>
                    <div className={"col-lg-6 col-12"}>
                        <ProductDemo name={"Coming Soon"}
                                     price={"?.??$/mo"}
                                     content={"Some quick example text to build on the card title and make up the bulk of " +
                                     "the card's content. Some quick example text to build on the card title and make up " +
                                     "the bulk of the card's content. Some quick example text to build on the card title " +
                                     "and make up the bulk of the card's content."}
                                     backgroundType={"circle"}/>
                    </div>
                </div>
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

export default Products;
