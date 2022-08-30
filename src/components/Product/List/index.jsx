import React, {useEffect} from "react";
import ProductDemo from "../Demo";

const ProductList = ({products, isLoading}) => {



    return (
        <>
        {true ? (
            <div>
                {products && products?.map(({ name, price, currency }) => (
                    <div key={1}>
                        <ProductDemo name={name}
                                     route={"profile-presenter-instagram"}
                                     label={name}
                                     price={price}
                                     currency={currency}
                                     content={"Some quick example text to build on the card title and make up the bulk of " +
                                         "the card's content. Some quick example text to build on the card title and make up " +
                                         "the bulk of the card's content. Some quick example text to build on the card title " +
                                         "and make up the bulk of the card's content."}
                                     backgroundType={"circle"}/>
                    </div>
                ))}
            </div>
            ) : (
                <>LOADING ...</>
            )}
        </>
    );
}

export default ProductList;