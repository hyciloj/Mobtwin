import {gql} from "@apollo/client";

export const IOS_APPS_IMG = gql(`
    query ios_apps_img($filters: IosFilters!) {
        ios_apps(filters: $filters) {
            icon  
        }
    }
`)