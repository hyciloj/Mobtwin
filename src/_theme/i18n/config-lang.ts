import {LangData} from "./models/LangModels";

export const allLanguages: LangData[] = [
  {
    label: 'English',
    value: 'en',
    icon: '/assets/icons/flags/ic_flag_en.svg',
  },
  {
    label: 'French',
    value: 'fr',
    icon: '/assets/icons/flags/ic_flag_fr.svg',
  },
  {
    label: 'Chinese',
    value: 'cn',
    icon: '/assets/icons/flags/ic_flag_cn.svg',
  },
  {
    label: 'Arabic (Sudan)',
    value: 'ar',
    icon: '/assets/icons/flags/ic_flag_sa.svg',
  },
  {
    label: 'Vietnamese',
    value: 'vi',
    icon: '/assets/icons/flags/ic_flag_sa.svg',
  },
];

export const defaultLang = allLanguages[0]; // English
