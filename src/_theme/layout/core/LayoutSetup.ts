import {ILayout} from "./LayoutModels";
import {DefaultLayoutConfig} from "./DefaultLayoutConfig";

const LAYOUT_CONFIG_KEY = process.env.REACT_APP_BASE_LAYOUT_CONFIG_KEY || 'LayoutConfig'

export function getLayout(): ILayout {
    const ls = localStorage.getItem(LAYOUT_CONFIG_KEY)

    if (ls) {
        try {
            return JSON.parse(ls) as ILayout
        } catch (er) {
            console.error(er)
        }
    }
    return DefaultLayoutConfig
}

function setLayout(config: ILayout): void {
    try {
        localStorage.setItem(LAYOUT_CONFIG_KEY, JSON.stringify(config))
    } catch (er) {
        console.error(er)
    }
}



export class LayoutSetup {

    public static config: ILayout = getLayout()

    public static setConfig(config: ILayout): void {

        const _body = document.body;
        _body.removeAttribute('class');
        _body.classList.add(config.mode);
        setLayout(config)
    }
}