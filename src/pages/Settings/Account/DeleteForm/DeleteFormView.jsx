import {ErrorMessage, Formik} from 'formik';
import {Checkbox, FormControlLabel, TextField} from "@mui/material";
import {red} from "@mui/material/colors";
import React from "react";
import ButtonBlop from "../../../../components/Button/Blop";

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
                            <FormControlLabel name={"confirmation"} control={<Checkbox sx={{
                                color: red[800],
                                '&.Mui-checked': {
                                    color: red[600],
                                },
                            }} defaultChecked required />} label="I understand what am I doing.*"/>
                            <ErrorMessage name={"confirmation"}/>
                            <TextField name={"password"}
                                       id={"password"}
                                       type={"password"}
                                       label={"Password"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-secondary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.password}/>

                            <ErrorMessage name={"password"}/>
                        </div>
                        <div className={"form-group mt-3"}>
                            <div className={"float-end"}>
                                <ButtonBlop type={"submit"} className={"blob-btn-border-red-md"}>
                                    {isLoading ? '' : 'Delete Account'}
                                </ButtonBlop>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default DeleteFormView;