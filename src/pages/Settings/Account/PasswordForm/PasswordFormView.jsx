import {ErrorMessage, Formik} from 'formik';
import {TextField} from "@mui/material";
import React from "react";

const PasswordFormView = ({onSubmit, validationSchema, isLoading, ...props}) => {
    return (
        <div className={"container"}>
            <Formik
                initialValues={{
                    oldPassword: '',
                    password: '',
                    repeatPassword: '',
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
                                       value={values.oldPassword}/>
                            <ErrorMessage name={"oldPassword"}/>

                            <TextField name={"password"}
                                       id={"password"}
                                       type={"password"}
                                       label={"New Password"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.newPassword}/>
                            <ErrorMessage name={"password"}/>

                            <TextField name={"repeatPassword"}
                                       id={"repeat-password"}
                                       type={"password"}
                                       label={"Repeat Password"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.repeatPassword}/>
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