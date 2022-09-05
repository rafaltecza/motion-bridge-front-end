import {ErrorMessage, Formik} from 'formik';
import {TextField} from "@mui/material";

const AddProductFormView = ({onSubmit, validationSchema, isLoading, ...props}) => {

    return (
        <div>
            <Formik
                initialValues={{
                    type: '',
                    title: '',
                    currency: '',
                    timePeriod: '',
                    animationQuantity: '',
                    price: '',
                    background: '',

                    titlePresentations: '',
                    contentPresentations: '',
                    previewPresentations:  '',
                    classesPresentations: '',

                    imageParameters: '',
                    subtitleParameters: '',
                    titleParameters: '',
                    contentParameters: '',
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
                            <TextField name={"type"}
                                       id={"type"}
                                       type={"text"}
                                       label={"Type"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.type}/>
                            <ErrorMessage name={"type"}/>

                            <TextField name={"title"}
                                       id={"title"}
                                       type={"text"}
                                       label={"Title"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.title}/>
                            <ErrorMessage name={"title"}/>

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

                            <TextField name={"background"}
                                       id={"background"}
                                       type={"text"}
                                       label={"Background"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.background}/>
                            <ErrorMessage name={"background"}/>

                            <h2>Presentations</h2>

                            <TextField name={"titlePresentations"}
                                       id={"titlePresentations"}
                                       type={"text"}
                                       label={"Title Presentations"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.titlePresentations}/>

                            <ErrorMessage name={"contentPresentations"}/>
                            <TextField name={"contentPresentations"}
                                       id={"contentPresentations"}
                                       type={"text"}
                                       label={"Content Presentations"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.contentPresentations}/>
                            <ErrorMessage name={"contentPresentations"}/>

                            <TextField name={"previewPresentations"}
                                       id={"previewPresentations"}
                                       type={"text"}
                                       label={"Preview Presentations"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.previewPresentations}/>
                            <ErrorMessage name={"previewPresentations"}/>

                            <TextField name={"classesPresentations"}
                                       id={"classesPresentations"}
                                       type={"text"}
                                       label={"Classes Presentations"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.classesPresentations}/>
                            <ErrorMessage name={"classesPresentations"}/>

                            <h2>Parameters</h2>

                            <TextField name={"imageParameters"}
                                       id={"imageParameters"}
                                       type={"text"}
                                       label={"Image Parameters"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.imageParameters}/>
                            <ErrorMessage name={"imageParameters"}/>

                            <TextField name={"subtitleParameters"}
                                       id={"subtitleParameters"}
                                       type={"text"}
                                       label={"Subtitle Parameters"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.subtitleParameters}/>
                            <ErrorMessage name={"subtitleParameters"}/>

                            <TextField name={"titleParameters"}
                                       id={"titleParameters"}
                                       type={"text"}
                                       label={"Title Parameters"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.titleParameters}/>
                            <ErrorMessage name={"titleParameters"}/>

                            <TextField name={"contentParameters"}
                                       id={"contentParameters"}
                                       type={"text"}
                                       label={"Content Parameters"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.contentParameters}/>
                            <ErrorMessage name={"contentParameters"}/>

                            <TextField name={"classesParameters"}
                                       id={"classesParameters"}
                                       type={"text"}
                                       label={"Classes Parameters"}
                                       variant={"outlined"}
                                       className={"w-100 my-2 text-field style-primary"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.classesParameters}/>
                            <ErrorMessage name={"classesParameters"}/>

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