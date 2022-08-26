import React from "react";
import {Tooltip} from "@material-ui/core";
import {BasketElement, BasketIconElement} from "./BasketElements";

const Basket = (props) => {
    return (
        <Tooltip title="Basket">
            <div className={"position-relative"}>
                <BasketIconElement className={"btn-hover"}/>
                <BasketElement className={"btn-hover"}>0</BasketElement>
            </div>
        </Tooltip>
    );
}

export default Basket;