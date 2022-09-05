import React, {useEffect} from "react";
import ProductDemo from "../Demo";

const ProductList = ({products, isLoading}) => {

    return (
        <>
        {!isLoading ? (
            <div>
                {products && Array.isArray(products) && products?.map(({ id, title, type, price, currency, presentations }) => (
                    <div key={1}>
                        <ProductDemo id={id}
                                     name={title}
                                     route={"profile-presenter-instagram"}
                                     label={type}
                                     price={price}
                                     currency={currency}
                                     content={presentations && presentations[0]?.content}
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