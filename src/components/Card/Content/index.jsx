import {CardContentElement} from "./ContentElements";
import {Grid} from "@material-ui/core";
import InventoryIcon from "@mui/icons-material/Inventory";
import React from "react";
import {ArrowBack} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

const CardContent = ({ children, back = false, icon, ...props }) => {

    const navigate = useNavigate();

    const content = icon ? (
            <Grid container spacing={2}>
                {back ? (
                    <Grid className={"text-title"} item>
                        <ArrowBack onClick={() => {
                            navigate(-1);
                        }} className={"btn-hover btn-clickable icon icon-large icon-rectangle bg-dark text-white p-1"}/>
                    </Grid>
                ) : null}

                <Grid style={{lineHeight: '40px'}} item>
                    {typeof icon === 'function' ? icon() : icon}
                </Grid>
                <Grid style={{lineHeight: '40px'}} item>
                    {children}
                </Grid>

                { props?.rightComponent ? (
                    <Grid className={"ms-auto"} item>
                        {props.rightComponent}
                    </Grid>
                ) : (null)}
            </Grid>
        ) : (
            <>
                {children}
            </>
        );

    return (
        <CardContentElement {...props}>
            {content}
        </CardContentElement>
    );
}

export default CardContent;