const {useSnackbar} = require("notistack");

const useHandleApiError = () => {
    const { enqueueSnackbar } = useSnackbar();

    const handleScrollToView = (fields) => {
        let offset = 0;
        let topEl = null;

        fields.forEach(field => {
            const el = document.getElementById(field);
            const elOffsetTop = el.getBoundingClientRect().x

            if(!offset || elOffsetTop < offset) {
                offset = elOffsetTop;
                topEl = el;
            }
        });

        if(!topEl) {
            const mainContainer = document.getElementById('main')
            mainContainer && mainContainer.scroll({
                top: 0,
                behavior: 'smooth'
            })
        } else {
            topEl.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    }

    const displayError = (error) => {
        let errorMessages = []
        if(!!error?.errors?.length) {
            error.errors.forEach(err =>
                Object.keys(error).forEach(key => {
                    errorMessages.push(`${key}: ${err[key].message}`)
                })
            )
        } else {
            errorMessages.push(error.message || error.detail)
        }

        errorMessages.forEach(message => {
            enqueueSnackbar(message, {
                variant: 'error',
                autoHideDuration: 5000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
            });
        });
    }

    const handle422Error = (errorData, formik) => {
        const fieldsErrors = errorData?.errors?.reduce((acc, err) => {
            for (const key in err) {
                acc[key] = err[key].message
            }
            return acc
        }, {})
        formik && formik.setErrors(fieldsErrors)
        handleScrollToView(Object.keys(fieldsErrors))
    }

    const handleErrors = (error, formik) => {
        const status = error?.response?.status;
        const errorData = error?.response?.data;

        displayError(errorData)

        switch (status) {
            case 422:
                handle422Error(errorData, formik)
                break;
            case 500:
            default:
                break;
        }
    }

    return handleErrors
}

export default useHandleApiError