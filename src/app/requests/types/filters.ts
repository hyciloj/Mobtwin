type DateRange = {
    startDate: string;
    endDate: string;
}

type FloatRange = {
    min: number;
    max: number;
}

export type Filter = {
    name?: string;
    summary?: string;
    description?: string;
    whatsNew?: string;
    releaseDate?: DateRange;
    lastUpdateDate?: DateRange;
    removalDate?: DateRange;
    published?: boolean;
    hasAds?: boolean;
    inApp?: boolean;
    type?: string;
    ages?: string;
    category?: string[];
    collection?: string[];
    rating?: FloatRange;
    price?: FloatRange;
    totalInstalls?: FloatRange;
    skip?: number;
    limit?: number;
}
