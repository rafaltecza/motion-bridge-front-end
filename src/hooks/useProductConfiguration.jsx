import SettingsIcon from "@mui/icons-material/Settings";
import React from "react";

const Yup = require("yup");

export const useProductConfiguration = [
    {
        id: 0,
        name: "Instagram Profile Presenter - {formState}/{maxFormState}",
        icon: () => <SettingsIcon className={"icon icon-large icon-rectangle bg-dark text-white"}/>,
        route: 'profile-presenter-instagram',
        forms: [
            {
                id: 0,
                form: [
                    {
                        valueName: 'userName',
                        placeholder: 'Instagram User Name',
                        type: 'text',
                        value: '',
                        validationSchema: Yup.string()
                            .required('Email is required'),
                    },
                    {
                        valueName: 'terms',
                        placeholder: "I have agreement to use content of inserted user.",
                        type: 'checkbox',
                        value: false,
                        validationSchema: Yup.boolean()
                            .oneOf([true], 'You must accept the terms and conditions')
                            .required('You must accept the terms and conditions'),
                    }
                ]
            },
            {
                id: 1,
                form: [
                    {
                        valueName: 'ringType',
                        name: 'Ring Type',
                        placeholder: 'Select one',
                        type: 'select',
                        value: 'casual',
                        availableOptions: ["casual", "close friend", "love", "work", "sponsorship", "vip"],
                        validationSchema: Yup.string()
                            .required('Ring type is required'),
                    },
                    {
                        valueName: 'like',
                        placeholder: 'Use Like',
                        type: 'checkbox',
                        value: true,
                        validationSchema: Yup.boolean(),
                    },
                    {
                        valueName: 'shoutOutPicture',
                        placeholder: 'Use Shout Out Picture',
                        type: 'checkbox',
                        value: true,
                        validationSchema: Yup.boolean(),
                    },
                ]
            },
            {
                id: 2,
                form: [
                    {
                        valueName: 'shoutOutPicture',
                        name: 'Shout Out Picture',
                        placeholder: 'Select one',
                        type: 'radio-list',
                        value: '0',
                        validationSchema: Yup.string()
                            .required('Shout out picture is required'),
                    },
                ]
            },
        ]
    }
];