import {ILayout} from "./LayoutModels";

const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: light)').matches;
const getDefaultTheme = (): 'light' | 'dark' => {

    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';

    return localStorageTheme ? JSON.parse(localStorageTheme).mode : browserDefault;
};
export const DefaultLayoutConfig: ILayout = {
    // mode: getDefaultTheme(),
    mode: "light",
    aside: {
        minimized: false,
        menuIcon: 'svg',
    },
}