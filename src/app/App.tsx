import React, {useEffect} from 'react';
import './App.css';
import {useTranslation} from "react-i18next";
// import {setLanguage, useLang} from "../_theme/i18n/LanguageContext";
import i18n from "../_theme/i18n/i18n"
import useLocales from "../_theme/i18n/useLocales";
import {allLanguages} from "../_theme/i18n/config-lang";

type Props = {
    basename: string
}

const App: React.FC<Props> = ({basename}) => {

    const {allLanguages, currentLang, onChangeLang, translate} = useLocales();

    const handleChangeLang = (newLang: string) => {
        onChangeLang(newLang);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>{translate('docs.description')}</h1>
                {
                    allLanguages.map((option, index) => (
                        <button key={index} onClick={() => {
                            handleChangeLang(option.value)
                        }}>{option.label}</button>
                    ))
                }
            </header>
        </div>
    );
}

export {App}
