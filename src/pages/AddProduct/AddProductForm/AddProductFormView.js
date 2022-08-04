import {ErrorMessage, Formik} from 'formik';
import {TextField} from "@mui/material";

const AddProductFormView = ({onSubmit, validationSchema, isLoading, ...props}) => {

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    animationQuantity: '',
                    currency: '',
                    timePeriod: '',
                    price: '',
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
                            <TextField name={"name"}
                                       id={"name"}
                                       type={"text"}
                                       label={"Name"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.name}/>
                            <ErrorMessage name={"name"}/>

                            <TextField name={"animationQuantity"}
                                       id={"animationQuantity"}
                                       type={"number"}
                                       label={"Animation Quantity"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.animationQuantity}/>
                            <ErrorMessage name={"animationQuantity"}/>

                            <TextField name={"currency"}
                                       id={"currency"}
                                       type={"text"}
                                       label={"Currency"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.currency}/>
                            <ErrorMessage name={"currency"}/>

                            <TextField name={"timePeriod"}
                                       id={"timePeriod"}
                                       type={"text"}
                                       label={"Time Period"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.timePeriod}/>
                            <ErrorMessage name={"timePeriod"}/>

                            <TextField name={"price"}
                                       id={"price"}
                                       type={"number"}
                                       label={"Price"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.price}/>
                            <ErrorMessage name={"price"}/>

                        </div>
                        <div className={"form-group"}>
                            <button type={"submit"} className={"btn btn-primary"}>
                                {isLoading ? '' : 'Add Product'}
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default AddProductFormView;