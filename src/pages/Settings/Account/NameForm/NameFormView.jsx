import {ErrorMessage, Formik} from 'formik';
import {Checkbox, FormControlLabel, TextField} from "@mui/material";
import {red} from "@mui/material/colors";
import React from "react";

const DeleteFormView = ({onSubmit, validationSchema, isLoading, ...props}) => {
    return (
        <div className={"container"}>
            <Formik
                initialValues={{
                    confirmation: false,
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ values,
                      handleReset,
                      handleChange,
                      handleBlur,
                      handleSubmit}) => (
                    <form onSubmit={handleSubmit} onReset={handleReset}>
                        <div className={"form-group"}>
                            <TextField name={"name"}
                                       id={"name"}
                                       type={"text"}
                                       label={"New Name"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.password}/>

                            <ErrorMessage name={"name"}/>
                        </div>
                        <div className={"form-group mt-3"}>
                            <button type={"submit"} className={"btn btn-primary float-end"}>
                                {isLoading ? '' : 'Save'}
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default DeleteFormView;