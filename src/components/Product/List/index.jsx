import React from "react";
import ProductDemo from "../Demo";
import {getProducts} from "../../../api/backend/user";
import {useMutation} from "@tanstack/react-query";
const {useEffect} = require("react");


const ProductList = () => {

    const getPacketsRes = useMutation(getProducts);
    const [packet, setPacket] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const onSuccess = async (data) => {
        setPacket(data.data);
        setIsLoading(true);
    }

    const onError = (error) => {
        setIsLoading(false);
        console.log("ERROR :(");
    }

    useEffect(() => {
        const fetchData = async () =>
            await getPacketsRes
                .mutateAsync(
                    {
                    }, {
                        onSuccess,
                        onError
                    }
                )
        fetchData();
    }, [packet]);



    return (
        <>
        {isLoading ? (
            <div>
                {packet.map(({ name, price, currency }) => (
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