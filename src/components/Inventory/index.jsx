import React from "react";
import {InventoryElement, InventoryIconElement} from "./InventoryElements";
import InventoryIcon from "@mui/icons-material/Inventory";
import {Tooltip} from "@material-ui/core";

const Inventory = (props) => {
    return (
        <Tooltip title="Inventory">
            <div className={"position-relative"}>
                <InventoryIconElement className={"btn-hover"}/>
                <InventoryElement className={"btn-hover"}>0</InventoryElement>
            </div>
        </Tooltip>
    );
}

export default Inventory;