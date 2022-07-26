import {ErrorMessage, Formik} from 'formik';
import {TextField} from "@mui/material";

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
                {({ handleReset, handleSubmit }) => (
                    <form onSubmit={handleSubmit} onReset={handleReset}>
                        <div className={"form-group"}>
                            <label htmlFor={"email"}>Email</label>
                            <TextField name={"email"} type={"email"} className={"form-control"}/>
                            <ErrorMessage name={"email"}/>
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor={"password"}>Password</label>
                            <TextField name={"password"} type={"password"} className={"form-control"}/>
                            <ErrorMessage name={"password"} />
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