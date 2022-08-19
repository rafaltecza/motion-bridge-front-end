import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// REDUX

import { Provider } from 'react-redux'
import store from './redux/store';
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/react-query";
import {UserContextProvider} from "./providers/UserContextProvider";
import {SnackbarProvider} from "notistack";
import {IconButton} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const notificationStackRef = React.createRef();
const onClickDismiss = (key) => () => {
    notificationStackRef.current.closeSnackbar(key);
}

const snackbarProps = {
    autoHideDuration: 5000,
    anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
    },
    maxSnack: 5,
    iconVariant: {
        success: <CheckCircleOutlineIcon className={"me-2"}/>,
        error: 'error',
        warning: 'warning',
        info: 'info',
    },
    ref: notificationStackRef,
    action: key => (
        <IconButton color={'default'} onClick={onClickDismiss(key)}>
            <HighlightOffIcon className={"text-white"}/>
        </IconButton>
    )
}

const queryClient = new QueryClient();

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
          <QueryClientProvider client={queryClient}>
              <UserContextProvider>
                  <SnackbarProvider {...snackbarProps}>
                      <App />
                  </SnackbarProvider>
              </UserContextProvider>
          </QueryClientProvider>
      </React.StrictMode>
    </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
