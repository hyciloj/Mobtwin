import {createContext} from "react";

export interface PageLink {
    title: string
    path: string
    isActive: boolean
    isSeparator?: boolean
}

export interface PageDataContextModel {
    pageTitle?: string
    setPageTitle: (_title: string) => void
    pageDescription?: string
    setPageDescription: (_description: string) => void
    pageBreadcrumbs?: Array<PageLink>
    setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => void
}

export const PageDataContext = createContext<PageDataContextModel>({
    setPageTitle: (_title: string) => {},
    setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => {},
    setPageDescription: (_description: string) => {},
})