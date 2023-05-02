import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "https://kodoumo.ir/wp-json/api/v2/" });

export const apiSlice = createApi({    reducerPath: "api",
    baseQuery: baseQuery,
    tagTypes: [],
    endpoints: (builder) => ({
        getAnimations: builder.query({
            query: (data) => ({
                url: `reviews-category/animations?page=${data?.page}&sortby=${data.sort}`,
            }),
        }),
    }),
});

export const { useGetAnimationsQuery } = apiSlice;
