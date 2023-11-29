import {PATH_DASHBOARD} from "../../../../app/routing/paths";
import {AsideMenuItemInterface} from "./types";

const duotune = "/media/icons/duotune/"

const svgPath = (svgIcon: string) => {

    return `${duotune}${svgIcon}.svg`
}

export const chartsSection: AsideMenuItemInterface[] = [
    {
        to: PATH_DASHBOARD.search,
        icon: svgPath("general/gen004"),
        title: `search`,
        fontIcon: `bi-app-indicator`
    },
    {
        to: PATH_DASHBOARD.charts,
        icon: svgPath("graphs/gra012"),
        title: `top charts`,
        fontIcon: `bi-app-indicator`,
    },
    {
        to: PATH_DASHBOARD.topTrending,
        icon: svgPath("graphs/gra012"),
        title: `top treading`,
        fontIcon: `bi-app-indicator`,
    }
]

export const builderSection: AsideMenuItemInterface[] = [
    {
        to: PATH_DASHBOARD.builder,
        icon: svgPath("abstract/abs014"),
        title: `builder`,
        fontIcon: `bi-app-indicator`
    },
]

export const asoToolsSection: AsideMenuItemInterface[] = [
    {
        to: PATH_DASHBOARD.trendingKeywords,
        icon: svgPath("text/txt010"),
        title: `trending keywords`,
        fontIcon: `bi-app-indicator`
    },
    {
        to: PATH_DASHBOARD.iconGenerator,
        icon: svgPath("art/art003"),
        title: `icon generator`,
        fontIcon: `bi-app-indicator`
    },
    {
        to: PATH_DASHBOARD.smartDescription,
        icon: svgPath("general/gen005"),
        title: `smart description`,
        fontIcon: `bi-app-indicator`
    },
]

export const pagesGeneratorSection: AsideMenuItemInterface[] = [
    {
        to: PATH_DASHBOARD.developerProfile,
        icon: svgPath("general/gen049"),
        title: `developer profile`,
        fontIcon: `bi-app-indicator`
    },
    {
        to: PATH_DASHBOARD.privacyPolicy,
        icon: svgPath("general/gen051"),
        title: `privacy policy`,
        fontIcon: `bi-app-indicator`
    },
    {
        to: PATH_DASHBOARD.TermsAndConditions,
        icon: svgPath("general/gen048"),
        title: `terms & conditions`,
        fontIcon: `bi-app-indicator`
    },
]
