export interface ILayout {
    mode: 'light' | 'dark'
    aside: IAside
}

export interface ILayoutCSSClasses {
    aside: Array<string>
    asideMenu: Array<string>
    asideToggle: Array<string>
}

export interface IAside {
    minimized: boolean // Set aside minimized by default
    menuIcon: 'svg' | 'font' // Menu icon type(svg|font)

}