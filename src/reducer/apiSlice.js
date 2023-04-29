// Import the RTK Query methods from the React-specific entry point
import {
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

// import * as base64 from "base-64";
// import * as utf8 from "utf8";

const baseQuery = fetchBaseQuery({ baseUrl: "/" });
const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    // console.log(args, api, extraOptions, result);
    if (result.error) {
        // console.log(args, api, extraOptions, result);
        // your logic here
    }
    return result;
};
// Define our single API slice object
export const apiSlice = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: "api",
    // All of our requests will have URLs starting with '/fakeApi'
    baseQuery: baseQueryWithReauth,
    tagTypes: [],
    // The "endpoints" represent operations and requests for this server
    endpoints: (builder) => ({
        getAnimations: builder.query({
            query: (data) => ({
                url: `https://kodoumo.ir/wp-json/api/v2/reviews-category/animations?page=${data?.page}`,
            }),
        }),
    }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetAnimationsQuery} = apiSlice;
