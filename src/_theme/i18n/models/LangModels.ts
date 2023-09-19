const I18N_CONFIG_KEY = process.env.REACT_APP_I18N_CONFIG_KEY || ''

export type LangModels = {
    selectedLang: 'ar' | 'cn' | 'en' | 'fr' | 'vi'
}

export type LangData = {
    label: string
    value: string
    icon: string
}
export const initialStateLang: LangModels = {
    selectedLang: 'en',
}

export function getConfig(): LangModels {
    const ls = localStorage.getItem(I18N_CONFIG_KEY)
    if (ls) {
        try {
            return JSON.parse(ls) as LangModels
        } catch (er) {
            console.error(er)
        }
    }
    return initialStateLang
}