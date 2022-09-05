import {ErrorMessage, Formik} from 'formik';
import {Checkbox, FormControlLabel, TextField} from "@mui/material";
import React from "react";
import {red} from "@mui/material/colors";

const RegisterFormView = ({onSubmit, validationSchema, isLoading, ...props}) => {
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    acceptedTerms: false,
                    acceptedNewsletter: false
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
                            <TextField id="name"
                                       label="Name"
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-secondary"}
                                       type="text"
                                       name={"name"}
                                       value={values.name}
                                       onChange={handleChange}
                                       required/>
                            <ErrorMessage name={"name"}/>
                            <TextField name={"email"}
                                       id={"email"}
                                       type={"email"}
                                       label={"Email"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-secondary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.email}
                                        required/>
                            <ErrorMessage name={"email"}/>
                            <TextField name={"password"}
                                       id={"password"}
                                       type={"password"}
                                       label={"Password"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-secondary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.password}
                                        required/>
                            <ErrorMessage name={"password"} />
                            <TextField variant={"outlined"}
                                       className={"w-100 my-2 text-field style-secondary"}
                                       id="repeat-password"
                                       label="Repeat Password"
                                       type="password"
                                       name={"repeatPassword"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       required/>
                            <ErrorMessage name={"name"}/>
                            <FormControlLabel control={<Checkbox sx={{
                                color: red[800],
                                '&.Mui-checked': {
                                    color: red[600],
                                },
                            }} defaultChecked required />} label="Accept rules of use.*"/>
                            <FormControlLabel control={<Checkbox sx={{
                                color: 'gray',
                                '&.Mui-checked': {
                                    color: 'gray',
                                },
                            }} defaultChecked />} label="Send me newsletter."/>
                        </div>
                        <div className={"form-group mt-3"}>
                            <button type={"submit"} className={"btn button-gold float-end"}>
                                {isLoading ? '' : 'Register'}
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default RegisterFormView;