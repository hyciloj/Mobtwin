export type G_App_Data = {
    g_apps: G_App[]
}

export type G_App = {
    _id: string
    ipd: number
    name: string
    summary: string
    categories: string[]
    installs: number
    added: string
    installsExact: number
    ratingsValue: number
    ratingsCount: number
    reviewsCount: number
    devName: string
    revenueForGuests: number
    downloadsForGuests: number
    description: string
    downloads: number
    website: string
    revenue: number
    removed: string
    published: boolean
    version: string
    trailer: string
    feature: string
    ages: string
    size: number
    icon: string
    updated: string
    released: string
    type: string
    free: string
    grossing: string
    paid: string
    new_free: string
    new_paid: string
    movers_shakers: string
    freeDiff: string
    paidDiff: string
    grossingDiff: string
    newFreeDiff: string
    moversShakersDiff: string
    newPaidDiff: string
    whatsnew: string
    wearos: string
    editorial: string
    price: number
    priceDropends: string
    priceDrop: string
    ads: boolean
    inapp: boolean
    similarOutPosition: string
    devCountry: string
    growth: string
    rank: string
    totalReverseEngrApps: number
    totalSimilarApps: number
    reverseEngApps: string[]
    similarApps: string[]
    screenshots: ScreenShot[]
    collections: string[]
    activeCountries: ActiveCountries
    positions: Position[]
    timeLine: TimeLineEntry[]
    estimates: Estimate[]
}

export type ScreenShot ={
    url: string
    type: string
}
export type ActiveCountries = {
    count: number
    list: [string]
}
export type Position = {
    collection: string
    category: string
    position: number
    country: string
    platform: string
}
export type TimeLineEntry = {
    app: string
    date: string
    field: string
    before: string[]
    after: string[]
    lang: string
    country: string
}
export type Estimate = {
    d: number
    r: number
    date: string
    month: string
    country: string
}