const {useSnackbar} = require("notistack");

const useHandleApiSuccess = () => {
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

    const displaySuccess = (success) => {
        let successMessages = []
        console.log(success);
        if(!!success?.errors?.length) {
            success.errors.forEach(err =>
                Object.keys(success).forEach(key => {
                    successMessages.push(`${key}: ${err[key].message}`)
                })
            )
        } else {
            successMessages.push(success.message || success.detail)
        }

        successMessages.forEach(message => {
            enqueueSnackbar(message, {
                variant: 'success',
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

    const handleErrors = (success, formik) => {
        const status = success?.response?.status;
        const errorData = success?.response?.data;

        displaySuccess(success);

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

export default useHandleApiSuccess