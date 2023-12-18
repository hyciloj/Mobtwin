import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./app/App";
import {I18nProvider} from "./_theme/i18n/I18nProvider";
import './_theme/assets/sass/style.scss'
import {LayoutProvider} from "./_theme/layout/core/provider";

// Redux
// https://github.com/rt2zz/redux-persist
// Axios
import axios from 'axios'
import {LoadingPrimary} from "./app/modules/components/loading/LoadingPrimary";

import {ApolloProvider} from '@apollo/client';
import client from "./setup/apollo/apollo";
import {AuthProvider} from "./app/auth/JwtContext";
import {BrowserRouter} from "react-router-dom";

const {PUBLIC_URL} = process.env
// _redux.setupAxios(axios, store)


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <AuthProvider>
        <ApolloProvider client={client}>
            <LayoutProvider>
                <I18nProvider>
                    <App basename={PUBLIC_URL}/>
                </I18nProvider>
            </LayoutProvider>
        </ApolloProvider>
    </AuthProvider>
);