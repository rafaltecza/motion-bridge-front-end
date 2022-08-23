import {ErrorMessage, Formik} from 'formik';
import {TextField} from "@mui/material";
import React from "react";

const PasswordFormView = ({onSubmit, validationSchema, isLoading, ...props}) => {
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
                            <TextField name={"oldPassword"}
                                       id={"old-password"}
                                       type={"password"}
                                       label={"Old Password"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.password}/>
                            <ErrorMessage name={"oldPassword"}/>

                            <TextField name={"newPassword"}
                                       id={"new-password"}
                                       type={"password"}
                                       label={"New Password"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.password}/>
                            <ErrorMessage name={"newPassword"}/>

                            <TextField name={"repeatPassword"}
                                       id={"repeat-password"}
                                       type={"password"}
                                       label={"Repeat Password"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.password}/>
                            <ErrorMessage name={"repeatPassword"}/>
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

export default PasswordFormView;