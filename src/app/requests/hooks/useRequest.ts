import {DocumentNode, useQuery} from "@apollo/client";

import {Filter, G_App_Data, IOS_App_Data} from "..";

interface AppDataQueryResult<T> {
    loading: boolean;
    error?: any;
    data?: T;
}

interface UseAppsQueryProps {
    query: DocumentNode;
    variables: { filters: Filter };
}

export function useAppsQuery<T extends G_App_Data | IOS_App_Data>({
                                                                      query,
                                                                      variables
                                                                  }: UseAppsQueryProps): AppDataQueryResult<T> {
    const {loading, error, data} = useQuery<T>(query, {
        variables,
    });

    return {loading, error, data};
}