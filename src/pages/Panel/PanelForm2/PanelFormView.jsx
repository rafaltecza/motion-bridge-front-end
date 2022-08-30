import {ErrorMessage, Formik} from 'formik';
import {Checkbox, FormControl, FormControlLabel, Grid, InputLabel, RadioGroup, TextField} from "@mui/material";
import React from "react";
import {red} from "@mui/material/colors";
import {MenuItem, Select} from "@material-ui/core";
import Box from "@mui/material/Box";
import Radio from "../../../components/Radio";
import ButtonBlop from "../../../components/Button/Blop";

const PanelFormView2 = ({onSubmit, onBack, onRender, onDownload, validationSchema, ...props}) => {

    return (
        <div>
            <Formik
                initialValues={{
                    username: ''
                }}
                onSubmit={onSubmit}
            >
                {({ values,
                      handleReset,
                      handleChange,
                      handleBlur,
                      handleSubmit}) => (
                    <form onSubmit={handleSubmit} onReset={handleReset}>
                        <TextField id="username"
                                   label="User"
                                   variant={"outlined"}
                                   className={"w-100 my-2 text-field style-secondary"}
                                   type="text"
                                   name={"username"}
                                   value={values?.username}
                                   onChange={handleChange}/>

                        <ErrorMessage name="username">
                            {(error) => <div className={"text-danger"}>{error}</div>}
                        </ErrorMessage>

                        <ButtonBlop type={"submit"} className={"blob-btn-border-gold-md"}>
                            Get User
                        </ButtonBlop>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default PanelFormView2;