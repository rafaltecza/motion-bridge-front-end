const {useSnackbar} = require("notistack");

const useHandleApiSuccess = () => {
    const { enqueueSnackbar } = useSnackbar();

    const displaySuccess = (success) => {
        if(success?.data?.message) {
            enqueueSnackbar(success?.data?.message, {
                variant: 'success',
                autoHideDuration: 5000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
            });
        }
    }

    const handleSuccess = (success) => {
        displaySuccess(success);
    }

    return handleSuccess
}

export default useHandleApiSuccess