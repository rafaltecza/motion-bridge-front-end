import {ErrorMessage, Formik} from 'formik';
import {Checkbox, FormControl, FormControlLabel, Grid, InputLabel, RadioGroup, TextField} from "@mui/material";
import React from "react";
import {red} from "@mui/material/colors";
import {MenuItem, Select} from "@material-ui/core";
import Box from "@mui/material/Box";
import Radio from "../../../components/Radio";
import ButtonBlop from "../../../components/Button/Blop";

const PanelFormView = ({onSubmit, onBack, onRender, onDownload, validationSchema, instagramUser, ...props}) => {

    const { productForm } = props;

    const instagramUserData = {
        name: 'Instagram User',
        verified: false,
        pictures: [
            'https://cdn.discordapp.com/attachments/902239644803039244/1013451973963563088/car4.jpg',
        ]
    }

    const getFieldComponent = (field, handleChange, handleBlur, defaultValue) => {
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
                                        { instagramUser?.map((picture, index) => {
                                            return <Grid item xs={4}><FormControlLabel className={"w-100 p-0 m-0"}
                                                key={index}
                                                value={picture?.photoUrl}
                                                control={<Radio className={"img-fluid rounded-2"} crossOrigin="anonymous" src={`https://cors-anywhere.herokuapp.com/${picture?.photoUrl}`} color="primary" alt={picture}/>}
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
                        variant={"outlined"}
                        className={"w-100 my-2 text-field style-secondary"}
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
                               className={"w-100 my-2 text-field style-secondary"}
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

                                { !props?.isFirst && <Grid item><ButtonBlop onClick={onBack} type="button" className={"blob-btn-border-red-md"}>
                                    {'Back'}
                                </ButtonBlop></Grid>}
                                <Grid ml={"auto"} item>
                                    { props?.isLast ? (
                                            props?.isRendered ? (
                                                <a href={`${props?.renderURL}`}>
                                                    <button type={"button"} className={"btn btn-primary"}>
                                                        Download
                                                    </button>
                                                </a>

                                            ) : (
                                                <ButtonBlop onClick={onRender} type={"button"} className={"blob-btn-border-red-md"} { ...props.isLoading && 'disabled'}>
                                                    { props.isLoading ? "Rendering..." : "Render"}
                                                </ButtonBlop>
                                            )
                                    ) : (
                                        <ButtonBlop type={"submit"} className={"blob-btn-border-gold-md"}>
                                            Next
                                        </ButtonBlop>
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