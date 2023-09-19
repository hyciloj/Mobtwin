import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {defaultLang} from "./config-lang";
import {ar, en, fr, vi, cn} from "./langs";
import {getConfig} from "./models/LangModels";

const initialState = getConfig();

i18n
    .use(initReactI18next)
    .init({
        lng: initialState.selectedLang, // Default language
        resources: {
            ar: {translation: ar},
            cn: {translation: cn},
            en: {translation: en},
            fr: {translation: fr},
            vi: {translation: vi},
        },
        fallbackLng: defaultLang.value,
        detect: async (callback: void) => {

        },
        interpolation: {
            escapeValue: false, // React handles escaping
        },
    });

export default i18n;
