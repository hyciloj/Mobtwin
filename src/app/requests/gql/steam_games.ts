import {gql} from "@apollo/client";

export const STEAM_IMG = gql(`
    query steam_games_img($filters: SteamFilters!) {
        steam_games(filters: $filters) {
            name
            summary
            header_image
            screenshots
        }
    }
`)