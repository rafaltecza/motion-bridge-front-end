import {ErrorMessage, Formik} from 'formik';
import {Alert, TextField} from "@mui/material";
import * as React from "react";

const GetProductsListView = ({onSubmit, validationSchema, isLoading, ...props}) => {
    const AlertError= () => {
        return ['Alice', 'Bob'].map(element => <div key={element}>{element}</div>);
    };
    return (
        <div>
            <Formik
                initialValues={{}}
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

export default GetProductsListView;