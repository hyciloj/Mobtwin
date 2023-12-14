export type IOS_App_Data = {
    ios_apps: IOS_App[]
}

export type IOS_App = {
    _id: string
    name: string
    summary: string
    categories: string[]
    devName: string
    devId: string
    removed: string
    published: boolean
    version: string
    feature: string
    size: number
    icon: string
    released: string
    type: string
}