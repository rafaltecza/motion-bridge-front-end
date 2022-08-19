import React from "react";
import {InventoryElement, InventoryIconElement} from "./InventoryElements";
import InventoryIcon from "@mui/icons-material/Inventory";

const Inventory = (props) => {
    return (
        <div className={"position-relative"}>
            <InventoryIconElement className={"btn-hover"}/>
            <InventoryElement className={"btn-hover"}>0</InventoryElement>
        </div>
    );
}

export default Inventory;