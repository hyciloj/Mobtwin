import { useTranslation } from 'react-i18next';

import { allLanguages, defaultLang } from './config-lang';
import i18n from "./i18n"
import {getConfig} from "./models/LangModels";

const I18N_CONFIG_KEY = process.env.REACT_APP_I18N_CONFIG_KEY || ''


export default function useLocales() {
  const {  t: translate } = useTranslation();

  const langStorage = getConfig()

  const currentLang = allLanguages.find((_lang) => _lang.value === langStorage.selectedLang) || defaultLang;

  const handleChangeLanguage = (newlang: string) => {
    localStorage.setItem(I18N_CONFIG_KEY, JSON.stringify({selectedLang: newlang}))
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate: (text: any, options?: any) => translate(text, options),
    currentLang,
    allLanguages,
  };
}
