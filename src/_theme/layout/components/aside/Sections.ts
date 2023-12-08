import {PATH_DASHBOARD} from "../../../../app/routing/paths";
import {AsideMenuItemInterface} from "./types";

const svgPath = (folder: string, svgIcon: string) => {

    return `/media/icons/${folder}/${svgIcon}.svg`
}

export const chartsSection: AsideMenuItemInterface[] = [
    {
        to: PATH_DASHBOARD.search,
        icon: svgPath("others", "search"),
        title: `search`,
        fontIcon: `bi-app-indicator`
    },
    {
        to: PATH_DASHBOARD.charts,
        icon: svgPath("others", "top-charts"),
        title: `top charts`,
        fontIcon: `bi-app-indicator`,
    },
    {
        to: PATH_DASHBOARD.topTrending,
        icon: svgPath("others", "niches-box"),
        title: `niches box`,
        fontIcon: `bi-app-indicator`,
    }
]

export const builderSection: AsideMenuItemInterface[] = [
    {
        to: PATH_DASHBOARD.builder,
        icon: svgPath("others", "builder"),
        title: `builder`,
        fontIcon: `bi-app-indicator`
    },
]

export const asoToolsSection: AsideMenuItemInterface[] = [
    {
        to: PATH_DASHBOARD.trendingKeywords,
        icon: svgPath("others", "trending-keywords"),
        title: `trending keywords`,
        fontIcon: `bi-app-indicator`
    },
    {
        to: PATH_DASHBOARD.iconGenerator,
        icon: svgPath("others", "icon-generator"),
        title: `icon generator`,
        fontIcon: `bi-app-indicator`
    },
    {
        to: PATH_DASHBOARD.smartDescription,
        icon: svgPath("others", "smart-description"),
        title: `smart description`,
        fontIcon: `bi-app-indicator`
    },
]

export const pagesGeneratorSection: AsideMenuItemInterface[] = [
    {
        to: PATH_DASHBOARD.developerProfile,
        icon: svgPath("others", "developer-profile"),
        title: `developer profile`,
        fontIcon: `bi-app-indicator`
    },
    {
        to: PATH_DASHBOARD.privacyPolicy,
        icon: svgPath("others", "privacy-policy"),
        title: `privacy policy`,
        fontIcon: `bi-app-indicator`
    },
    {
        to: PATH_DASHBOARD.termsAndConditions,
        icon: svgPath("others", "terms-conditions"),
        title: `terms & conditions`,
        fontIcon: `bi-app-indicator`
    },
]
