import ParticlesBg from "particles-bg";
import React from "react";
import {Grid} from "@mui/material";

const UserDemoToList = (props) => {
    return (
        <>
            <div className={"row my-3"}>
                <div className={"col-12"}>
                    <div className={"card bg-gradient-bm"}>
                        <div className={"opacity-50"}>
                            <ParticlesBg type={props.backgroundType} bg={{
                                position: "absolute",
                                zIndex: -1,
                                top: 0,
                                left: 0,
                                borderRadius: "6px"
                            }}/>
                        </div>

                        <div className={"card-body text-white p-4 z-1"}>
                            <div className={"d-flex"}>
                                <div className={"row g-0 w-100"}>

                                    <Grid container spacing={3}>
                                        <Grid item xs={4}>
                                            <h5>Name:</h5>
                                            <span>{props.name}</span>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <h5>Email:</h5>
                                            <span>{props.label}</span>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <h5>Account Activated:</h5>
                                            <span>{props.id}</span>
                                        </Grid>
                                    </Grid>

                                </div>
                            </div>
                            <div className={"col-12 col-md-8"}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDemoToList;
