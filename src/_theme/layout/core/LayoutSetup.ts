import {IAside, ILayout, ILayoutCSSClasses} from "./LayoutModels";
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

export function getEmptyCssClasses() {
    return {
        aside: [],
        asideMenu: [],
        asideToggle: [],
    }
}


export class LayoutSetup {

    public static config: ILayout = getLayout()
    public static classes: ILayoutCSSClasses = getEmptyCssClasses()

    private static initCSSClasses(): void {
        LayoutSetup.classes = getEmptyCssClasses()
    }

    private static initAside(config: IAside): void {

        // console.log("initAside => ", config.minimizedY)
        // if (config.minimizedY) {
        //     document.body.setAttribute('data-kt-aside-minimize-y', 'on')
        // } else {
        //     console.log("hello")
        // }
    }

    private static setAside(config: IAside): void {

        const kt_aside_toggle = document.getElementById("kt_aside")

        if (kt_aside_toggle) {

            if (config.minimizedY) {
                kt_aside_toggle.setAttribute('data-kt-aside-minimize-y', 'on')
            } else {
                kt_aside_toggle.removeAttribute('data-kt-aside-minimize-y')
            }
        }
    }

    private static initConfig(config: ILayout): void {

        // console.log(config)

        // console.log("initConfig => ", config)
        LayoutSetup.initAside(config.aside)
    }

    public static updatePartialConfig(fieldsToUpdate: Partial<ILayout>): ILayout {

        const config = LayoutSetup.config
        const updatedConfig = {...config, ...fieldsToUpdate}
        LayoutSetup.initCSSClasses()
        LayoutSetup.config = updatedConfig
        LayoutSetup.initConfig(Object.assign({}, updatedConfig))
        return updatedConfig
    }

    public static setConfig(config: ILayout): void {

        const _body = document.body;
        _body.removeAttribute('class');
        _body.classList.add(config.mode);
        LayoutSetup.setAside(config.aside)
        setLayout(config);
    }

    public static bootstrap = (() => {
        LayoutSetup.updatePartialConfig(LayoutSetup.config)
    })()
}