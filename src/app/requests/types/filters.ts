import {number} from "yup";

type DateRange = {
    startDate: string;
    endDate: string;
}

type FloatRange = {
    min: number;
    max: number;
}

export type Filter = {
    name:  string
    description:  string
    categories:  string[]
    skip:  number
    limit:  number
}

export interface GFilters extends Filter {
    summary:  string
}
export interface IosFilters extends Filter {}

export interface SteamFilters extends Filter {
    published: boolean
}