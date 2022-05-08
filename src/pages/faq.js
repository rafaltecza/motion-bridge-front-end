import React from 'react'
import {Typography} from "@mui/material";

const Faq = () => {
    return (
        <div className={"container"}  style={{
            minHeight: '90vh',
            fontFamily: "Poppins, sans-serif"
        }}>
            <div>
                <div className={"row my-4"}>
                    <div className={"col-12 col-md-12"}>
                        <div className={"card card-mb py-4 px-4 h-100"}>
                            <h3><b>FAQ</b></h3>
                        </div>
                    </div>
                </div>
                <div className={"row my-4"}>
                    <div className={"col-12 col-md-12"}>
                        <div className={"card card-mb py-4 px-4 h-100"}>
                                <Typography variant="h6" gutterBottom component="div">
                                    1. Question
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                    blanditiis tenetur
                                </Typography>

                                <Typography variant="h6" gutterBottom component="div">
                                    2. Question
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                    blanditiis tenetur
                                </Typography>

                                <Typography variant="h6" gutterBottom component="div">
                                    3. Question
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                    blanditiis tenetur
                                </Typography>

                                <Typography variant="h6" gutterBottom component="div">
                                    4. Question
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                    blanditiis tenetur
                                </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;