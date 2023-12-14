import {gql} from "@apollo/client";

export const G_APPS_IMG = gql(`
    query G_apps_img($filters: Filter!) {
      g_apps(filters: $filters) {
        icon
      }
    }
`)