import {ErrorMessage, Formik} from 'formik';
import {Alert, TextField} from "@mui/material";

const LoginFormView = ({onSubmit, validationSchema, isLoading, ...props}) => {
    const AlertError= () => {
        return ['Alice', 'Bob'].map(element => <div key={element}>{element}</div>);
    };
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
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.email}/>
                            <ErrorMessage name={"email"}/>
                            <TextField name={"password"}
                                       id={"password"}
                                       type={"password"}
                                       label={"Password"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.password}/>

                            <ErrorMessage name={"password"}/>
                        </div>
                        <div className={"form-group"}>
                            <button type={"submit"} className={"btn btn-primary"}>
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