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
                            <TextField className={"w-100 my-2"}
                                       id="name"
                                       label="Name"
                                       variant="outlined"
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
                                       variant="outlined"
                                       className={"w-100 my-2"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.email}
                                        required/>
                            <ErrorMessage name={"email"}/>
                            <TextField name={"password"}
                                       id={"password"}
                                       type={"password"}
                                       label={"Password"}
                                       variant="outlined"
                                       className={"w-100 my-2"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.password}
                                        required/>
                            <ErrorMessage name={"password"} />
                            <TextField className={"w-100 my-2"}
                                       id="repeat-password"
                                       label="Repeat Password"
                                       variant="outlined"
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
                            <FormControlLabel control={<Checkbox color="default" defaultChecked />} label="Send me newsletter."/>
                        </div>
                        <div className={"form-group"}>
                            <button type={"submit"} className={"btn btn-primary"}>
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