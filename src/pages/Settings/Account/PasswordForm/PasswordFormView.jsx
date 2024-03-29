import {ErrorMessage, Formik} from 'formik';
import {TextField} from "@mui/material";
import React from "react";
import ButtonBlop from "../../../../components/Button/Blop";

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
                                       className={"w-100 my-2 text-field style-secondary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.oldPassword}/>
                            <ErrorMessage name={"oldPassword"}/>

                            <TextField name={"password"}
                                       id={"password"}
                                       type={"password"}
                                       label={"New Password"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-secondary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.newPassword}/>
                            <ErrorMessage name={"password"}/>

                            <TextField name={"repeatPassword"}
                                       id={"repeat-password"}
                                       type={"password"}
                                       label={"Repeat Password"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-secondary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.repeatPassword}/>
                            <ErrorMessage name={"repeatPassword"}/>

                        </div>
                        <div className={"form-group mt-3"}>
                            <div className={"float-end"}>
                                <ButtonBlop type={"submit"} className={"blob-btn-border-red-md"}>
                                    {isLoading ? '' : 'Save'}
                                </ButtonBlop>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default PasswordFormView;