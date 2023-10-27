import {ILayout} from "./LayoutModels";

const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
const getDefaultTheme = (): 'light' | 'dark' => {

    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';

    return localStorageTheme ? JSON.parse(localStorageTheme).mode : browserDefault;
};
export const DefaultLayoutConfig: ILayout = {
    mode: getDefaultTheme(),
    aside: {
        minimizedY: false,
        menuIcon: 'svg',
    },
}