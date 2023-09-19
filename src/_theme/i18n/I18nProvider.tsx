import React, {FC, createContext} from 'react'
import {ChildrenProps} from "../../config-global";
import {getConfig, initialStateLang, LangModels} from "./models/LangModels";

const I18nContext = createContext<LangModels>(initialStateLang)

const I18nProvider: FC<ChildrenProps> = ({children}) => {

    const lang = getConfig()

    return <I18nContext.Provider value={lang}>{children}</I18nContext.Provider>
}

export {I18nProvider}
