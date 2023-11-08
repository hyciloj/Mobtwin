import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./app/App";
import {I18nProvider} from "./_theme/i18n/I18nProvider";
import './_theme/assets/sass/style.scss'
import {LayoutProvider} from "./_theme/layout/core/provider";
// Redux
// https://github.com/rt2zz/redux-persist
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import * as _redux from './setup'
import store, {persistor} from './setup/redux/Store'
// Axios
import axios from 'axios'
import {LoadingPrimary} from "./app/modules/components/loading/LoadingPrimary";

const {PUBLIC_URL} = process.env
_redux.setupAxios(axios, store)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<LoadingPrimary />}>
            <LayoutProvider>
                <I18nProvider>
                    <App basename={PUBLIC_URL}/>
                </I18nProvider>
            </LayoutProvider>
        </PersistGate>
    </Provider>
);

/*

<Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <App basename={PUBLIC_URL}/>
    </PersistGate>
</Provider>


 */