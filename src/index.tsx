import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./app/App";
import {I18nProvider} from "./_theme/i18n/I18nProvider";

const {PUBLIC_URL} = process.env

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <I18nProvider>
        <App basename={PUBLIC_URL}/>
    </I18nProvider>
);