export interface AsideMenuItemInterface {
    to: string
    title: string
    icon?: string
    fontIcon?: string
    hasBullet?: boolean
}

export interface AsideMenuSectionInterface {
    name: string
    item: AsideMenuItemInterface []
}
