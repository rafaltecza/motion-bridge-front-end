import {ErrorMessage, Formik} from 'formik';
import {Checkbox, FormControl, FormControlLabel, Grid, InputLabel, RadioGroup, TextField} from "@mui/material";
import React from "react";
import {red} from "@mui/material/colors";
import {MenuItem, Select} from "@material-ui/core";
import Box from "@mui/material/Box";
import Radio from "../../../components/Radio";

const PanelFormView = ({onSubmit, onBack, onRender, onDownload, validationSchema, ...props}) => {

    const { productForm } = props;

    const instagramUser = {
        name: 'Instagram User',
        verified: false,
        pictures: [
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ]
    }

    const getFieldComponent = (field, handleChange, handleBlur, defaultValue) => {
        console.log(field?.type)
        switch (field?.type) {
            case "radio-list":
                return (
                    <FormControl component="fieldset">
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={""}
                                onChange={handleChange}
                            >
                                <Grid justifyContent="center"
                                      alignItems="center" container spacing={3}>
                                        { instagramUser.pictures.map((picture, index) => {
                                            return <Grid item xs={4}><FormControlLabel className={"w-100 p-0 m-0"}
                                                key={index}
                                                value={picture}
                                                control={<Radio className={"img-fluid rounded-2"} src={picture} color="primary" alt={picture}/>}
                                            /></Grid>
                                        })}
                                </Grid>

                            </RadioGroup>

                    </FormControl>
                )
            case "checkbox":
                return <>
                    <FormControl component="fieldset">
                        <FormControlLabel id={field?.valueName}
                                          name={field?.valueName}
                                          label={field?.placeholder}
                                          onChange={handleChange}
                                          value={defaultValue}
                                          onBlur={handleBlur}
                                          control={<Checkbox sx={{
                                              color: red[800],
                                              '&.Mui-checked': {
                                                  color: red[600],
                                              },
                                          }} { ...field?.value && "defaultChecked"  } />}
                        />
                        <ErrorMessage name={field?.valueName}>
                            {(error) => <div className={"text-danger"}>{error}</div>}
                        </ErrorMessage>
                    </FormControl>
                </>
            case "select":
                return <>

                    <TextField
                        select
                        labelId={`${field?.valueName}-field`}
                        id={`${field?.valueName}-select`}
                        name={`${field?.valueName}`}
                        value={`${defaultValue}`}
                        label={field?.name}
                        onChange={handleChange}
                        className={"w-100 my-2 text-field style-primary"}
                        onBlur={handleBlur}
                    >
                        <MenuItem disabled>{field?.placeholder}</MenuItem>
                        {field?.availableOptions.map((option, index) => {
                            const optionName = typeof option === "string" ? option.charAt(0).toUpperCase() + option.slice(1) : "" + option;
                            return <MenuItem value={`${option}`}>{optionName}</MenuItem>
                        })}

                    </TextField>
                    <ErrorMessage name={`${field?.valueName}`}>
                        {(error) => <div className={"text-danger"}>{error}</div>}
                    </ErrorMessage>
                </>
            default:
                return <>
                    <TextField name={field?.valueName}
                               id={field?.valueName}
                               type={field?.type}
                               label={field?.placeholder}
                               variant={"outlined"}
                               className={"w-100 my-2 text-field style-primary"}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={defaultValue}/>
                    <ErrorMessage name={field?.valueName}>
                        {(error) => <div className={"text-danger"}>{error}</div>}
                    </ErrorMessage>
                </>;
        }
    }

    return (
        <div>
            <Formik
                initialValues={
                    productForm.form.map((valueObject, index) => {
                        return {
                            [valueObject.valueName]: valueObject?.value,
                        }
                    })
                }
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
                            {productForm.form.map((valueObject, index) => {
                                return getFieldComponent(valueObject, handleChange, handleBlur, values[valueObject?.valueName]);
                            })}
                        </div>
                        <div className={"form-group mt-4"}>
                            <Grid container>

                                { !props?.isFirst && <Grid item><button onClick={onBack} type="button" className={"btn btn-primary me-2"}>
                                    {'Back'}
                                </button></Grid>}
                                <Grid ml={"auto"} item>
                                    { props?.isLast ? (
                                            props?.isRendered ? (
                                                <a href={`${props?.renderURL}`}>
                                                    <button type={"button"} className={"btn btn-primary"}>
                                                        Download
                                                    </button>
                                                </a>

                                            ) : (
                                                <button onClick={onRender} type={"button"} className={"btn btn-primary"} { ...props.isLoading && 'disabled'}>
                                                    { props.isLoading ? "Rendering..." : "Render"}
                                                </button>
                                            )
                                    ) : (
                                        <button type={"submit"} className={"btn btn-primary"}>
                                            Next
                                        </button>
                                    )}
                                </Grid>
                            </Grid>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default PanelFormView;