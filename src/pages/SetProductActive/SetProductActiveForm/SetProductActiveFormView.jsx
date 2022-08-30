import {ErrorMessage, Formik} from 'formik';
import {TextField} from "@mui/material";
import React from "react";
import {useUserContext} from "../../../providers/UserContextProvider";

const SetProductActiveFormView = ({onSubmit, validationSchema, isLoading, ...props}) => {
    const { user } = useUserContext();

    return (
        <div className={"container"}>
            <Formik
                initialValues={{
                    name: user?.username,
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
                            <TextField name={"productId"}
                                       id={"productId"}
                                       type={"productId"}
                                       label={"Product Id"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.productId}/>

                            <ErrorMessage name={"productId"}/>
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

export default SetProductActiveFormView;