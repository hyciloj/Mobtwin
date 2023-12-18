
export type Steam_Games_Data = {
    steam_games: Steam_Games[]
}

export type Steam_Games = {
    _id: string
    name: string
    summary: string
    description: string
    about_the_game: string
    reviews: string
    header_image: string
    released: string
    published: boolean
    removed: string
    website: string
    support_url: string
    support_email: string
    developers: string[]
    windows: boolean
    mac: boolean
    linux: boolean
    metacritic_score: number
    metacritic_url: string
    achievements: number
    recommendations: number
    notes: string
    support_languages: string[]
    full_audio_languages: string[]
    publishers: string[]
    categories: string[]
    genres: string[]
    screenshots: string[]
    movies: string[]
    user_score: number
    score_rank: string
    positive: number
    negative: number
    estimated_owners: string
    average_playtime_forever: number
    average_playtime_2weeks: number
    median_playtime_forever: number
    median_playtime_2weeks: number
    peak_ccu: number
    price: number
    dlc_count: number
}