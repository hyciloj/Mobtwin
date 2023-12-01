import {IAside, IMode} from "./LayoutModels";


export class SetSetup {

    public static setTheme(config: IMode): void {

        document.body.className = `${config.mode}`
    }

    public static settAside(config: IAside): void {
        // Check if aside is displayed
        if (!config.display) {
            return
        }

        // Enable Aside
        document.body.classList.add('aside-enabled', 'toolbar-fixed')

        // Fixed Aside
        if (config.fixed) {
            document.body.classList.add('aside-fixed')
        }
        if (!config.fixed) {
            document.body.classList.remove('aside-fixed')
        }

        // Default minimized
        if (config.minimized) {
            document.body.setAttribute('data-kt-aside-minimize', 'on')
        }
        if (!config.minimized) {
            document.body.removeAttribute('data-kt-aside-minimize')
        }

        // Hoverable on minimize
        // if (config.hoverable) {
        //     document.body.classList.add('aside-fixed')
        // }
    }

}