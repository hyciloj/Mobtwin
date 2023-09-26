import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./app/App";
import {I18nProvider} from "./_theme/i18n/I18nProvider";
import './_theme/assets/sass/style.scss'
import {LayoutProvider} from "./_theme/layout/core/provider";

const {PUBLIC_URL} = process.env

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <LayoutProvider>
        <I18nProvider>
            <App basename={PUBLIC_URL}/>
        </I18nProvider>
    </LayoutProvider>
);