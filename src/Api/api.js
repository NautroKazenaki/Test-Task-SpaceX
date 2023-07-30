import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'spaceXApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spacexdata.com/v3/'
    }),
    endpoints: (builder) => ({
        getMissions: builder.query({
            query: ({ startYear, endYear, order }) => `launches?start=${startYear}-01-01&end=${endYear}-12-31&success=true&order=${order}`,
        }),
    }),
});

export const { useGetMissionsQuery } = api

