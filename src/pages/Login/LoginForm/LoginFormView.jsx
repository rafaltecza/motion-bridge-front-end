import {ErrorMessage, Formik} from 'formik';
import {Alert, TextField} from "@mui/material";

const LoginFormView = ({onSubmit, validationSchema, isLoading, ...props}) => {
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
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
                            <TextField name={"email"}
                                       id={"email"}
                                       type={"email"}
                                       label={"Email"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-secondary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.email}/>
                            <ErrorMessage name={"email"}/>
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
                            <button type={"submit"} className={"btn button-gold float-end"}>
                                {isLoading ? '' : 'Login'}
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default LoginFormView;