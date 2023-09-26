import React, {useEffect} from 'react';
import Header from "./Header";
import "../_theme/assets/sass/style.scss"
import {LayoutProvider} from "../_theme/layout/core";
import {MasterLayout} from "../_theme/layout/MasterLayout";

type Props = {
    basename: string
}

const App: React.FC<Props> = ({basename}) => {

    // const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
    // const getDefaultTheme = (): string => {
    //     const localStorageTheme = localStorage.getItem('default-theme');
    //     const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    //     return localStorageTheme || browserDefault;
    // };


    return (
            <MasterLayout>
                <Header />
            </MasterLayout>
    );
}

export {App}
